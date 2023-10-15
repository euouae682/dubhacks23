from flask import current_app
from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, Event
from flask_app.schemas import RecommendationSchema, EventSchema
from flask_app.resources import ai_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView
from sqlalchemy.sql import func
from datetime import datetime
import openai

import vertexai
from vertexai.language_models import TextGenerationModel

def get_patient(id):
    user = User.query.filter_by(id=id, is_doctor=False).first()
    if not user:
        abort(404, message='Patient does not exist.')
    return user

def extract_message(response):
    return response['choices'][0]['message']['content']

def create_prompt(events):
    prompt = f'Today, the patient, who is suffering from cancer, has '
    for event in events[:-1]:
        prompt += f'a {event.title.lower()} from {event.start_time.strftime("%I:%M%p")} to {event.end_time.strftime("%I:%M%p")}, '
    prompt += f'a {events[-1].title.lower()} from {events[-1].start_time.strftime("%I:%M%p")} to {events[-1].end_time.strftime("%I:%M%p")}. '
    prompt += 'Fill in the rest of the schedule with a few (2 - 3) tasks the patient can do by themselves to aid with recovery. Be specific, and do not include things the patient would do anyway, such as sleep. Your answer should be formatted as a list of "<task_title>, <location>, <start_time>, <end_time>" with a linebreak in between each task, and no other text or advice. task_title should be short, and no fields should include commas.'
    return prompt

def create_prompt_bard(events):
    prompt = f'You are a highly knowledegable and helpful medical professional. Today, the patient, who is suffering from cancer, has '
    for event in events[:-1]:
        prompt += f'a {event.title} from {event.start_time.strftime("%I:%M%p")} to {event.end_time.strftime("%I:%M%p")}, '
    prompt += f'a {events[-1].title} from {events[-1].start_time.strftime("%I:%M%p")} to {events[-1].end_time.strftime("%I:%M%p")}. '
    prompt += 'Fill in the rest of the schedule with a few (2 - 3) tasks the patient can do by themselves to aid with recovery. Be specific, and do not include things the patient would do anyway, such as sleep. Your answer should be formatted as a list of "<task_title>, <location>, <start_time>, <end_time>" with a linebreak in between each task, and no other text or advice. task_title should be short, and no fields should include commas.'
    return prompt

def get_bard_response(prompt) -> str:

    vertexai.init(project=current_app.config['GOOGLE_PROJECT_ID'])
    parameters = {"temperature": .2,  "max_output_tokens": 256, "top_p": 0.8, "top_k": 40}

    model = TextGenerationModel.from_pretrained("text-bison")
    response = model.predict(prompt, **parameters)

    return response.text

@bp.route('/patients/<int:id>/recommendations/openai')
class OpenAIView(MethodView):
    @bp.arguments(RecommendationSchema, as_kwargs=True)
    @bp.response(200, EventSchema(many=True))
    def post(self, date, id):
        '''
        With patient's visit history and a date of events, get GPT3.5's recommendation for tasks to do later on the same day.
        '''
        patient = get_patient(id)
        events = patient.events.filter(func.date(Event.start_time) == date).all()
        if events:
            response = extract_message(openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[
                {"role": "system", "content": "You are a highly knowledgeable and helpful medical professional."},
                {"role": "user", "content": create_prompt(events)}]
            ))
            print(response)
            new_events = []
            for new_event in response.split('\n'):
                new_event = new_event.split(', ')
                new_events.append({'title': new_event[0], 'location': new_event[1], 'start_time': datetime.strptime(f'{date} {new_event[2]}', "%Y-%m-%d %I:%M%p"), 'end_time': datetime.strptime(f'{date} {new_event[3]}', "%Y-%m-%d %I:%M%p")})

            return new_events

@bp.route('/patients/<int:id>/recommendations/vertexai')
class VertexAIView(MethodView):
    @bp.arguments(RecommendationSchema, as_kwargs=True)
    @bp.response(200, EventSchema(many=True))
    def post(self, date, id):
        '''
        With patient's visit history and a date of events, get Google's text-bison's recommendation for tasks to do later on the same day.
        '''
        patient = get_patient(id)
        events = patient.events.filter(func.date(Event.start_time) == date).all()
        if events:
            response = get_bard_response(create_prompt(events))
            print(response)
            new_events = []
            for new_event in response[1:].split('\n'):
                new_event = new_event[2:].split(', ')
                new_events.append({'title': new_event[0], 'location': new_event[1], 'start_time': datetime.strptime(f'{date} {new_event[2]}', "%Y-%m-%d %I:%M%p"), 'end_time': datetime.strptime(f'{date} {new_event[3]}', "%Y-%m-%d %I:%M%p")})
            return new_events
        
        
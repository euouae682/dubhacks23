from flask import current_app
from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, Event, PatientUpdate
from flask_app.schemas import RecommendationSchema, EventSchema, ChatbotMessageSchema
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

def construct_patient_history(patient):
    last_visit = patient.visits.order_by(PatientUpdate.id.desc()).first()
    patient_history = f'Pretend you are speaking to one of your patients. They are a {last_visit.weight} pound, {last_visit.height} inch cancer patient. They are currently on {last_visit.treatment}. The doctor had this to say about them: "{last_visit.notes}"'
    return patient_history

@bp.route('/patients/<int:id>/chatbot')
class OpenAIChatbotView(MethodView):
    @bp.arguments(ChatbotMessageSchema(many=True))
    @bp.response(200, ChatbotMessageSchema)
    def post(self, history, id):
        '''
        Accepts a list of previous, chronologically ordered messages of the form {'role': <role>, 'content': <content>}. Messages sent by the patient should have a role of 'user', and messages sent by the bot should have a role of 'assistant'. Messages from both parties should be included in the message history. Utilizes a patient's visit history to give responses specific to each patient. e.g. begin a conversation with just one message: [{'role': 'user', 'content': 'How much of my medication should I take?'}]
        '''
        patient = get_patient(id)
        context = [{"role": "system", "content": "Pretend you are a highly knowledgeable and helpful oncologist. "}]
        context[0]['content'] += construct_patient_history(patient)
        context += history
        print(context)
        response = extract_message(openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=context))
        return {'role': 'assistant', 'content': response}

@bp.route('/patients/<int:id>/recommendations/openai')
class OpenAIRecommendationsView(MethodView):
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
        
        
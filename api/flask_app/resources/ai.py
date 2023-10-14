from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, PatientUpdate
from flask_app.schemas import ChatSchema
from flask_app.resources import ai_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView
import openai

def get_patient(id):
    user = User.query.filter_by(id=id, is_doctor=False).first()
    if not user:
        abort(404, message='Patient does not exist.')
    return user

@bp.route('/patients/<int:id>/recommendations')
class GPTView(MethodView):
    @bp.response(200, ChatSchema)
    def get(self, id):
        '''
        we do a little ai'ing
        get GPT3.5's recommendation for the patient
        '''
        patient = get_patient(id)
        return {'recommendation': 'euthanasia'}
        return str(openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Hello world"}]))
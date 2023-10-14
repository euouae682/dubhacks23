from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, Event
from flask_app.schemas import EventSchema
from flask_app.resources import event_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView

def get_patient(id):
    user = User.query.filter_by(id=id, is_doctor=False).first()
    if not user:
        abort(404, message='Patient does not exist.')
    return user

@bp.route('/patients/<int:id>/events')
class EventsView(MethodView):
    @bp.response(200, EventSchema(many=True))
    def get(self, id):
        '''
        Returns list of events from a patient.
        '''
        patient = get_patient(id)
        return patient.events.all()
    
    @bp.arguments(EventSchema)
    @bp.response(201, EventSchema)
    def post(self, event_data, id):
        '''
        Create new vist.
        '''
        patient = get_patient(id)
        event = Event(patient_id=id)
        for field in event_data:
            setattr(event, field, event_data[field])
        db.session.add(event)
        db.session.commit()
        return event
    
# @bp.route('/visits/<int:id>')
# class visitView(MethodView): 
#     @bp.response(200, visitSchema)
#     def get(self, id):
#         return get_patient(id)

#     @bp.arguments(PatientSchemaPasswordless)
#     @bp.response(200, PatientSchema)
#     def put(self, patient_data, id):
#         '''
#         Use to edit patient data, including doctor.
#         '''
#         patient = get_patient(id)
#         for field in patient_data:
#             setattr(patient, field, patient_data[field])
#         db.session.commit()
#         return patient

#     @bp.response(200)
#     def delete(self, id):
#         patient = get_patient(id)
#         db.session.delete(patient)
#         db.session.commit()

# @bp.route('/doctors/<int:id>/patients')
# class DoctorPatientsView(MethodView):
#     @bp.response(200, PatientSchema(many=True))
#     def get(self, id):
#         '''
#         Returns list of a doctor's current patients.
#         '''
#         return User.query.filter_by(doctor_id=id).all()
    

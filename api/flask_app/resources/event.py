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

def get_event(id, event_id):
    event = Event.query.filter_by(patient_id=id, id=event_id).first()
    if not event:
        abort(404, message='Event does not exist.')
    return event

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
        Create new event.
        '''
        patient = get_patient(id)
        event = Event(patient_id=id)
        for field in event_data:
            setattr(event, field, event_data[field])
        db.session.add(event)
        db.session.commit()
        return event
    
@bp.route('/patients/<int:id>/events/<int:event_id>')
class EventView(MethodView): 
    @bp.response(200, EventSchema)
    def get(self, id, event_id):
        return get_event(id, event_id)
    
    @bp.arguments(EventSchema)
    @bp.response(200, EventSchema)
    def put(self, event_data, id, event_id):
        event = get_event(id, event_id)
        for field in event_data:
            setattr(event, field, event_data[field])
        db.session.commit()
        return event

    @bp.response(200)
    def delete(self, id, event_id):
        event = get_event(id, event_id)
        db.session.delete(event)
        db.session.commit()
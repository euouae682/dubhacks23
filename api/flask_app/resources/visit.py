from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, PatientUpdate
from flask_app.schemas import VisitSchema
from flask_app.resources import visit_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView

def get_patient(id):
    user = User.query.filter_by(id=id, is_doctor=False).first()
    if not user:
        abort(404, message='Patient does not exist.')
    return user

@bp.route('/patients/<int:id>/visits')
class VisitsView(MethodView):
    @bp.response(200, VisitSchema(many=True))
    def get(self, id):
        '''
        Returns list of visits from a patient.
        '''
        patient = get_patient(id)
        return patient.visits.all()
    
    @bp.arguments(VisitSchema)
    @bp.response(201, VisitSchema)
    def post(self, visit_data, id):
        '''
        Create new vist.
        '''
        patient = get_patient(id)
        visit = PatientUpdate(patient_id=id)
        for field in visit_data:
            setattr(visit, field, visit_data[field])
        db.session.add(visit)
        db.session.commit()
        return visit
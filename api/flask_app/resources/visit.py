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

def get_visit(id, visit_id):
    visit = PatientUpdate.query.filter_by(patient_id=id, id=visit_id).first()
    if not visit:
        abort(404, message='Visit does not exist.')
    return visit

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
    
@bp.route('/patients/<int:id>/visits/<int:visit_id>')
class VisitView(MethodView): 
    @bp.response(200, VisitSchema)
    def get(self, id, visit_id):
        return get_visit(id, visit_id)
    
    @bp.arguments(VisitSchema)
    @bp.response(200, VisitSchema)
    def put(self, visit_data, id, visit_id):
        visit = get_visit(id, visit_id)
        for field in visit_data:
            setattr(visit, field, visit_data[field])
        db.session.commit()
        return visit

    @bp.response(200)
    def delete(self, id, visit_id):
        visit = get_visit(id, visit_id)
        db.session.delete(visit)
        db.session.commit()
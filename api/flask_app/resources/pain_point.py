from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, PatientUpdate, PainPoint
from flask_app.schemas import PainPointSchema
from flask_app.resources import pain_point_bp as bp
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

def get_pain_point(visit_id, pain_point_id):
    pain_point = PainPoint.query.filter_by(patient_update_id=visit_id, id=pain_point_id).first()
    if not pain_point:
        abort(404, message='Pain point does not exist.')
    return pain_point

@bp.route('/patients/<int:id>/visits/<int:visit_id>/pain_points')
class PainPointsView(MethodView):
    @bp.response(200, PainPointSchema(many=True))
    def get(self, id, visit_id):
        '''
        Returns list of pain points from a visit.
        '''
        visit = get_visit(id, visit_id)
        return visit.pain_points.all()
    
    @bp.arguments(PainPointSchema)
    @bp.response(201, PainPointSchema)
    def post(self, pain_point_data, id, visit_id):
        '''
        Create new vist.
        '''
        pain_point = PainPoint(patient_update_id=visit_id)
        for field in pain_point_data:
            setattr(pain_point, field, pain_point_data[field])
        db.session.add(pain_point)
        db.session.commit()
        return pain_point
    
@bp.route('/patients/<int:id>/visits/<int:visit_id>/pain_points/<int:pain_point_id>')
class PainPointView(MethodView): 
    @bp.response(200, PainPointSchema)
    def get(self, id, visit_id, pain_point_id):
        return get_pain_point(visit_id, pain_point_id)
    
    @bp.arguments(PainPointSchema)
    @bp.response(200, PainPointSchema)
    def put(self, pain_point_data, id, visit_id, pain_point_id):
        pain_point = get_pain_point(visit_id, pain_point_id)
        for field in pain_point_data:
            setattr(pain_point, field, pain_point_data[field])
        db.session.commit()
        return pain_point

    @bp.response(200)
    def delete(self, id, visit_id, pain_point_id):
        pain_point = get_pain_point(visit_id, pain_point_id)
        db.session.delete(pain_point)
        db.session.commit()
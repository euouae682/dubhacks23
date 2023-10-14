from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User, PatientUpdate
from flask_app.schemas import VisitSchema
from flask_app.resources import visits_bp as bp
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
    

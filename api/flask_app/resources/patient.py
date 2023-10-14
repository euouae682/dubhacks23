from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User
from flask_app.schemas import PatientSchema, PatientSchemaPasswordless
from flask_app.resources import patient_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView

def get_patient(id):
    user = User.query.filter_by(id=id, is_doctor=False).first()
    if not user:
        abort(404, message='Patient does not exist.')
    return user

@bp.route('/patients')
class PatientsView(MethodView):
    @bp.response(200, PatientSchema(many=True))
    def get(self):
        '''
        Returns list of all patients.
        '''
        return User.query.filter_by(is_doctor=False).all()
    
    @bp.arguments(PatientSchema)
    @bp.response(201, PatientSchema)
    def post(self, patient_data):
        '''
        Create new patient, assigning doctor_id is optional
        '''
        patient = User()
        patient.set_password(patient_data['password'])
        for field in patient_data:
            setattr(patient, field, patient_data[field])
        patient.is_doctor = False
        db.session.add(patient)
        db.session.commit()
        return patient
    
@bp.route('/patients/<int:id>')
class PatientView(MethodView): 
    @bp.response(200, PatientSchema)
    def get(self, id):
        return get_patient(id)

    @bp.arguments(PatientSchemaPasswordless)
    @bp.response(200, PatientSchema)
    def put(self, patient_data, id):
        '''
        Edit patient data, including doctor.
        '''
        patient = get_patient(id)
        for field in patient_data:
            setattr(patient, field, patient_data[field])
        db.session.commit()
        return patient

    @bp.response(200)
    def delete(self, id):
        patient = get_patient(id)
        db.session.delete(patient)
        db.session.commit()

@bp.route('/doctors/<int:id>/patients')
class DoctorPatientsView(MethodView):
    @bp.response(200, PatientSchema(many=True))
    def get(self, id):
        '''
        Returns list of a doctor's current patients.
        '''
        return User.query.filter_by(doctor_id=id).all()
    

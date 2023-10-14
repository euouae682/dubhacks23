from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User
from flask_app.schemas import DoctorSchema, DoctorSchemaPasswordless
from flask_app.resources import doctor_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView

def get_doctor(id):
    user = User.query.filter_by(id=id, is_doctor=True).first()
    if not user:
        abort(404, message='Doctor does not exist.')
    return user

@bp.route('/doctors')
class DoctorsView(MethodView):
    @bp.response(200, DoctorSchema(many=True))
    def get(self):
        '''
        Returns list of all doctors.
        '''
        return User.query.filter_by(is_doctor=True).all()
    
    @bp.arguments(DoctorSchema)
    @bp.response(201, DoctorSchema)
    def post(self, doctor_data):
        '''
        Create new doctor.
        '''
        doctor = User()
        doctor.set_password(doctor_data['password'])
        for field in doctor_data:
            setattr(doctor, field, doctor_data[field])
        doctor.is_doctor = True
        db.session.add(doctor)
        db.session.commit()
        return doctor
    
@bp.route('/doctors/<int:id>')
class DoctorView(MethodView): 
    @bp.response(200, DoctorSchema)
    def get(self, id):
        return get_doctor(id)
    
    @bp.arguments(DoctorSchemaPasswordless)
    @bp.response(200, DoctorSchema)
    def put(self, doctor_data, id):
        doctor = get_doctor(id)
        for field in doctor_data:
            setattr(doctor, field, doctor_data[field])
        db.session.commit()
        return doctor

    @bp.response(200)
    def delete(self, id):
        doctor = get_doctor(id)
        db.session.delete(doctor)
        db.session.commit()
    
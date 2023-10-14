from flask_smorest import Blueprint

auth_bp = Blueprint('auth', 'auth', url_prefix='/api')
patient_bp = Blueprint('patient', 'patient', url_prefix='/api')
doctor_bp = Blueprint('doctor', 'doctor', url_prefix='/api')
visits_bp = Blueprint('visits', 'visits', url_prefix='/api')

from flask_app.resources import patient, doctor, auth, visits
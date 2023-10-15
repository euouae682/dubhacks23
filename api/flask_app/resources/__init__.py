from flask_smorest import Blueprint

auth_bp = Blueprint('auth', 'auth', url_prefix='/api')
patient_bp = Blueprint('patient', 'patient', url_prefix='/api')
doctor_bp = Blueprint('doctor', 'doctor', url_prefix='/api')
visit_bp = Blueprint('visit', 'visit', url_prefix='/api')
ai_bp = Blueprint('ai', 'ai', url_prefix='/api')
event_bp = Blueprint('event', 'event', url_prefix='/api')
pain_point_bp = Blueprint('pain_point', 'pain_point', url_prefix='/api')

from flask_app.resources import patient, doctor, auth, ai, visit, event, pain_point
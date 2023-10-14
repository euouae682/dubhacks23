from flask_smorest import Blueprint

user_bp = Blueprint('user', 'user', url_prefix='/api')

from flask_app.resources import user
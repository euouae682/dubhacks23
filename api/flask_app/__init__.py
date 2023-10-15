from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_smorest import Api
from config import Config
from flask_app.http_token_auth import HTTPTokenAuth

httpauth = HTTPTokenAuth('Bearer')
db = SQLAlchemy()
migrate = Migrate()
api = Api()

def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db, render_as_batch=True)
    api.init_app(app)

    # from app.auth import bp as auth_bp
    # api.register_blueprint(auth_bp)

    from flask_app.resources import auth_bp, patient_bp, doctor_bp, visit_bp, ai_bp, event_bp, pain_point_bp
    api.register_blueprint(auth_bp)
    api.register_blueprint(patient_bp)
    api.register_blueprint(doctor_bp)
    api.register_blueprint(visit_bp)
    api.register_blueprint(ai_bp)
    api.register_blueprint(event_bp)
    api.register_blueprint(pain_point_bp)
    # api.register_blueprint(article_bp)
    # api.register_blueprint(comment_bp)
    # api.register_blueprint(category_bp)
    # api.register_blueprint(tag_bp)
    # api.register_blueprint(newsletter_bp)
    # api.register_blueprint(analytics_bp)
    return app

from flask_app import models
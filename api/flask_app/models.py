from flask import current_app
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from time import time
from datetime import timedelta, datetime
from flask_app import db

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(32))
    email = db.Column(db.String(64))
    birthday = db.Column(db.Date())
    password_hash = db.Column(db.String(128))
    is_doctor = db.Column(db.Boolean())
    hospital = db.Column(db.String())
    title = db.Column(db.String())
    name = db.Column(db.String())
    doctor_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    doctor = db.relationship('User', remote_side=[id])
    visits = db.relationship('PatientUpdate', backref='patient', lazy='dynamic')
    events = db.relationship('Event', backref='patient', lazy='dynamic')

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def get_auth_token(self, expires_in=timedelta(days=1).total_seconds()):
        return jwt.encode(
            {'id': self.id, 'exp': time() + expires_in},
            current_app.config['SECRET_KEY'], algorithm='HS256'
        )
    
    @staticmethod
    def verify_auth_token(token):
        try:
            id = jwt.decode(
                token, current_app.config['SECRET_KEY'],
                algorithms=['HS256'])['id']
        except Exception as e:
            return None
        return User.query.get(id)

    def __repr__(self):
        return f'<User {self.username}>'
    
class PatientUpdate(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    datetime = db.Column(db.DateTime(), index=True, default=datetime.utcnow)
    # medical data or something
    weight = db.Column(db.Integer())
    height = db.Column(db.Integer())
    gender = db.Column(db.String())
    diagnoses = db.Column(db.String())
    heartbeat = db.Column(db.Integer())
    white_blood_cells = db.Column(db.Integer())
    treatment = db.Column(db.String())
    notes = db.Column(db.String())

    patient_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    pain_points = db.relationship('PainPoint', backref='patient', lazy='dynamic')

class Event(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    start_time = db.Column(db.DateTime(), index=True, default=datetime.utcnow)
    end_time = db.Column(db.DateTime(), index=True, default=datetime.utcnow)
    title = db.Column(db.String())
    location = db.Column(db.String())
    logo = db.Column(db.String()) # url or like hard code the types i guess lol

    patient_id = db.Column(db.Integer(), db.ForeignKey('user.id'))

class PainPoint(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    location = db.Column(db.String())
    title = db.Column(db.String())
    details = db.Column(db.String())
    color = db.Column(db.String())
    patient_update_id = db.Column(db.Integer(), db.ForeignKey('patient_update.id'))
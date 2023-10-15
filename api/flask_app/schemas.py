from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from marshmallow import fields
from flask_app import db
from flask_app.models import User, PatientUpdate, Event, PainPoint

class Schema(SQLAlchemySchema):
    def load(self, *args, **kwargs):
        return super().load(*args, **kwargs, session=db.session)

class PatientSchema(Schema):
    class Meta:
        model = User
        ordered = True

    id = auto_field(required=True, dump_only=True)
    username = auto_field(required=True)
    email = auto_field(required=True)
    password = fields.String(required=True, load_only=True)
    name = auto_field(required=True)
    birthday = auto_field(required=True)
    doctor_id = auto_field()

class PatientSchemaPasswordless(PatientSchema):
    class Meta(PatientSchema.Meta):
        exclude = ('password',)

class DoctorSchema(Schema):
    class Meta:
        model = User
        ordered = True

    id = auto_field(required=True, dump_only=True)
    username = auto_field(required=True)
    email = auto_field(required=True)
    password = fields.String(required=True, load_only=True)
    hospital = auto_field(required=True)
    title = auto_field(required=True)
    name = auto_field(required=True)

class DoctorSchemaPasswordless(DoctorSchema):
    class Meta(DoctorSchema.Meta):
        exclude = ('password',)

class PatientIDSchema(Schema):
    id = fields.Integer(required=True)

class DoctorIDSchema(Schema):
    doctor_id = fields.Integer(required=True)

class AuthTokenSchema(Schema):
    auth_token = fields.String(required=True)

class AuthSchema(Schema):
    username = fields.String(required=True)
    password = fields.String(required=True)

class EventSchema(Schema):
    class Meta:
        model = Event
        ordered = True

    id = auto_field(required=True, dump_only=True)
    start_time = auto_field(required=True)
    end_time = auto_field(required=True)
    title = auto_field(required=True)
    location = auto_field(required=True)
    logo = auto_field()
    details = fields.String()


class VisitSchema(Schema):
    class Meta:
        model = PatientUpdate
        ordered = True

    id = auto_field(required=True, dump_only=True)
    datetime = auto_field(required=True)
    weight = auto_field(required=True)
    height = auto_field(required=True)
    heartbeat = auto_field(required=True)
    treatment = auto_field(required=True)
    notes = auto_field(required=True)
    white_blood_cells = auto_field(required=True)
    diagnoses = auto_field(required=True)
    gender = auto_field(required=True)

class PainPointSchema(Schema):
    class Meta:
        model = PainPoint
        ordered = True

    id = auto_field(required=True, dump_only=True)
    location = auto_field(required=True)
    title = auto_field(required=True)
    details = auto_field(required=True)
    color = auto_field(required=True)

class RecommendationSchema(Schema):
    date = fields.Date(required=True, load_only=True)

class ChatbotMessageSchema(Schema):
    role = fields.String(required=True)
    content = fields.String(required=True)
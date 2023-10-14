from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field
from marshmallow import fields
from flask_app import db
from flask_app.models import User

class Schema(SQLAlchemySchema):
    def load(self, *args, **kwargs):
        return super().load(*args, **kwargs, session=db.session)

class UserSchema(Schema):
    class Meta:
        model = User
        ordered = True

    id = auto_field(required=True, dump_only=True)
    username = auto_field(required=True)
    email = auto_field(required=True)
    password = fields.String(required=True, load_only=True)
    is_doctor = auto_field(required=True)
    doctor_id = auto_field()

class AuthTokenSchema(Schema):
    auth_token = fields.String()

class AuthSchema(Schema):
    username = fields.String(required=True)
    password = fields.String(required=True)
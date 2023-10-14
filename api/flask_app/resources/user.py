from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User
from flask_app.schemas import UserSchema, AuthTokenSchema, AuthSchema
from flask_app.resources import user_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView
from flask_smorest import abort

@httpauth.verify_token
def verify_token(token):
    return User.verify_auth_token(token)


def get_user(id):
    user = User.query.filter_by(id=id).first()
    if not user:
        abort(404, message='User does not exist.')
    return user

@bp.route('/users')
class UsersView(MethodView):
    @bp.response(200, UserSchema(many=True))
    def get(self):
        '''
        Returns basic information about all Users.
        '''
        return User.query.all()
    
    @bp.arguments(UserSchema)
    @bp.response(201, UserSchema)
    def post(self, user_data):
        user = User()
        user.set_password(user_data['password'])
        for field in user_data:
            setattr(user, field, user_data[field])
        db.session.add(user)
        db.session.commit()
        return user

@bp.route('/users/<int:id>')
class UserView(MethodView):
    @bp.response(200, UserSchema)
    def get(self, id):
        '''
        Returns all information about an User.
        '''
        return get_user(id)

    @bp.arguments(UserSchema)
    @bp.response(200, UserSchema)
    def put(self, user_data, id):
        user = get_user(id)
        user.set_password(password=user_data['password'])
        for field in user_data:
            setattr(user, field, user_data[field])
        db.session.commit()
        return user

    @bp.response(200)
    def delete(self, id):
        user = get_user(id)
        db.session.delete(user)
        db.session.commit()

@bp.route('/auth')
class AuthView(MethodView):
    @httpauth.login_required()
    @bp.response(200)
    def get(self):
        '''
        Tests authorization.
        '''
        pass

    @bp.arguments(AuthSchema, as_kwargs=True)
    @bp.response(200, AuthTokenSchema)
    def post(self, username, password):
        '''
        Returns an access token.

        Requires username and password. Subsequent requests should include the token in the 'Authorization' header with the Bearer scheme.
        '''
        user = User.query.filter_by(username=username).first()
        if not user or not user.check_password(password):
            abort(400, message="Invalid username or password.")
        return {'auth_token': user.get_auth_token()}
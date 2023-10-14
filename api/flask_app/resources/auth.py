from flask.views import MethodView
from flask_smorest import abort
from flask_app.models import User
from flask_app.schemas import AuthTokenSchema, AuthSchema
from flask_app.resources import auth_bp as bp
from flask_app import httpauth, db
from flask.views import MethodView

@httpauth.verify_token
def verify_token(token):
    return User.verify_auth_token(token)

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
from flask_app import create_app, db
import flask_app.models as models

app = create_app()

models_shell_context = ['User']

@app.shell_context_processor
def make_shell_context():
    return {'db': db} | dict((attr, getattr(models, attr)) for attr in models_shell_context)

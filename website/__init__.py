from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'This key is extremely secret'

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app
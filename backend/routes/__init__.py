from flask import Blueprint
from .user import user_bp
from .auth import auth_bp

def register_blueprints(app):
    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)

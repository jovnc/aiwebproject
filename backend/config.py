import os
from dotenv import load_dotenv

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
load_dotenv()

# Authentiaction and CORS
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
jwt = JWTManager(app)
CORS(app)  # Allow CORS for all routes

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

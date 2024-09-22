import os
from dotenv import load_dotenv

from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
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

# dummy users
users = {
    "user1": {"password": "password1"},
    "user2": {"password": "password2"}
}

# Define your models (schema)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# default route
@app.route('/')
def home():
    return "Hello, Flask!"

# /login endpoint validates the user credentials and returns a JWT if successful.
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username not in users or users[username]["password"] != password:
        return jsonify({"msg": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

# /protected endpoint is accessible only if the user has a valid JWT (issued during login).
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/users')
def get_users():
    users = User.query.all()  # Retrieve all users
    return {
        'users': [
            {'id': user.id, 'username': user.username, 'email': user.email}
            for user in users
        ]
    }

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

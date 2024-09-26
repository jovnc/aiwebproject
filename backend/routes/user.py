from flask import Blueprint, request, jsonify
from config import db
from models import User

user_bp = Blueprint('user', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all() 
    json_users = list(map(lambda user: user.to_json(), users))
    return jsonify({"users": json_users})

@user_bp.route('/users', methods=['POST'])
def create_user():
    # handle unsupported media type
    if request.content_type != 'application/json':
        return jsonify({"error": "Content-Type not supported"}), 415
    
    # get the request data
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')

    # handle missing data
    if not username or not email or not password:
        return jsonify({"error": "Missing username or email or password"}), 400

    # handle existing user
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 409
    
    # handle existing email
    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({"error": "Email already exists"}), 409

    # create new user
    new_user = User(username=username, email=email, password=password)

    try:
        db.session.add(new_user) # Adds new User record to staging zone
        db.session.commit() # Commits all User records to database
    except Exception as e:
        return jsonify({"error": str(e)}), 400

    return jsonify({"message": "User created successfully"}), 201

@user_bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_json())

@user_bp.route('/users/<int:id>', methods=['PATCH'])
def update_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    # get the request data
    username = request.json.get('username', user.username)
    email = request.json.get('email', user.email)
    password = request.json.get('password', user.password)

    try:
        db.session.commit()
    except Exception as e:
        return jsonify({"error": str(e)}), 400

    return jsonify({"message": "User updated successfully"}), 200

@user_bp.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted successfully"}), 200
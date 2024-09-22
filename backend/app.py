from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'
jwt = JWTManager(app)
CORS(app)  # Allow CORS for all routes

# dummy users
users = {
    "user1": {"password": "password1"},
    "user2": {"password": "password2"}
}

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

if __name__ == '__main__':
    app.run(debug=True)

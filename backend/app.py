from config import app, db
from routes import register_blueprints

register_blueprints(app)

if __name__ == '__main__':

    # instantiate the database
    with app.app_context():
        db.create_all()

    # run the app
    app.run(debug=True)

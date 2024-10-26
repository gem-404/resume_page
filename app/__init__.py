from flask import Flask


def create_app():
    """App factory function to create and configure the Flask application."""
    app = Flask(__name__)

    # Register the main blueprint from routes.py
    from app.routes import main  # Import the blueprint
    app.register_blueprint(main)  # Register it with the app

    return app

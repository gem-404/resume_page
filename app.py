# app.py

from app import create_app  # Import the app factory function


app = create_app()  # Initialize the app


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Run the app locally

# app/routes.py

from flask import Blueprint, render_template, send_file


# Create a blueprint named 'main'
main = Blueprint('main', __name__)


@main.route('/')
def home():
    """Route for the homepage."""
    return render_template('index.html')  # Render the index template


@main.route('/resume')
def resume():
    """Route to download the resume."""
    # Adjust the path to your resume PDF if needed
    return send_file('static/resume.pdf', as_attachment=True)

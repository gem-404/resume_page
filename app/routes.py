from flask import Blueprint, render_template, send_file


main = Blueprint('main', __name__)


@main.route('/')
def home():
    """Route for the homepage."""
    return render_template('index.html')


@main.route('/resume')
def resume():
    """Route to download the resume."""
    return send_file('static/resume.docx', as_attachment=True)

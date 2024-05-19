from flask import Blueprint, render_template,request

views = Blueprint('views', __name__)

@views.route('/')
def index():
    return render_template("home.html")

@views.route('/about')
def about():
    return render_template("about.html")

@views.route('/file-based-qa')
def fileBasedQa():
    return render_template("fileBasedQa.html")

@views.route('/project-members')
def projectMembers():
    return render_template("projectMembers.html")
from django.shortcuts import render
from django.http import HttpResponse
import os

# Create your views here.

def landing(request):
    return render(request, "landing/landing.html")

def resume(request):
    return render(request, "resume/resume.html")

def projects(request):
    return render(request, "projects/projects.html")

def contact(request):
    form_id = os.getenv('FORM_ID')  # Get the form ID from the environment variable
    arg = {}
    arg['form_id'] = form_id
    return render(request, 'contact/contact.html', arg)
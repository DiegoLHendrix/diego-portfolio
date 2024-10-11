from django.shortcuts import render
from django.http import HttpResponse
import os

# Create your views here.

def landing(request):
    return render(request, "landing/landing.html")

def resume(request):
    return render(request, "resume/resume.html")

def contact(request):
    form_id = os.getenv('FORM_ID')  # Get the form ID from the environment variable
    arg = {}
    arg['form_id'] = form_id
    return render(request, 'contact/contact.html', arg)

def evt(request):
    return render(request, "projects/evt/evt.html")

def lvss(request):
    return render(request, "projects/evt/lvss.html")

def rtos(request):
    return render(request, "projects/evt/rtos.html")

def clovis(request):
    return render(request, "projects/personal/clovis-1.html")
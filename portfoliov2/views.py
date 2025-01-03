from django.shortcuts import render
from django.http import HttpResponse
import os


# Create your views here.
# Base
def landing(request):
    return render(request, "base/landing.html")


def resume(request):
    return render(request, "base/resume.html")


def contact(request):
    form_id = os.getenv("FORM_ID")  # Get the form ID from the environment variable
    arg = {}
    arg["form_id"] = form_id
    return render(request, "base/contact.html", arg)


# EVT
def evt(request):
    return render(request, "projects/evt.html")


# Embedded Systems Design
def esd(request):
    return render(request, "projects/esd.html")


# Personal Projects and Class Assignments/Labs
def clovis(request):
    return render(request, "projects/clovis-1.html")

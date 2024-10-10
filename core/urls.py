from django.urls import path

from . import views

urlpatterns = [
    path("", views.landing, name="landing"),
    path('resume/', views.resume, name="resume"),
    path('projects/', views.projects, name="projects"),
    path('contact/', views.contact, name="contact"),

    # EVT
    path('evt/', views.evt, name="evt"),
    path('lvss/', views.lvss, name="lvss"),
    path('rtos/', views.rtos, name="rtos"),
]
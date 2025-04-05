# api/urls.py
from django.urls import path
from .views import index, secure_image_view

urlpatterns = [
    path("", index),
    path("api/secure-image/<path:filename>", secure_image_view, name="secure-image"),
]

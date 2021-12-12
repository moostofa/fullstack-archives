from django.urls import path
from django.contrib.auth.views import LogoutView

from . import views

urlpatterns = [
    path("register", views.register_view, name="Register"),
    path("login", views.login_view, name="Login"),
    path("logout", LogoutView.as_view(), name="Logout")
]
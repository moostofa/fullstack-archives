from django.urls import path
from django.contrib.auth.views import LogoutView

from .views import register_view, login_view

urlpatterns = [
    path("register", register_view, name="Register"),
    path("login", login_view, name="Login"),
    path("logout", LogoutView.as_view(), name="Logout")
]
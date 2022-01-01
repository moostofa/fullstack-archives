from django.urls import path
from django.contrib.auth.views import LogoutView

from rest_framework.authtoken.views import obtain_auth_token

from .views import UsernameListView, RegisterView

urlpatterns = [
    path("usernames", UsernameListView.as_view(), name="usernames"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", obtain_auth_token, name="login"),
    path("logout", LogoutView.as_view(), name="Logout")
]
from django.urls import path
from django.contrib.auth.views import LogoutView

from .views import UsernameList, RegisterView, LoginView

urlpatterns = [
    path("usernames", UsernameList.as_view(), name="usernames"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginView.as_view(), name="login"),
    path("logout", LogoutView.as_view(), name="Logout")
]
from django.contrib.auth import authenticate, login
from django.db import IntegrityError

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .forms import LoginForm, RegistrationForm
from .models import User


# Return a list of usernames. 
# This endpoint is called in the frontend registration form to guard against duplicate usernames on client-side.
@api_view(["GET"])
def usernames(request):
    usernames = User.objects.values_list("username", flat=True)
    return Response(usernames) 


# Register the user
@api_view(["POST"])
def register_view(request):
    # get form data and validate passwords & username
    credentials = RegistrationForm(request.POST)
    if not credentials.is_valid():
        return Response("Invalid credentials - form is invalid")

    username = credentials.cleaned_data["username"]
    password = credentials.cleaned_data["password"]
    confirm_password = credentials.cleaned_data["confirm_password"]

    if password != confirm_password:
        return Response("Invalid credentials - passwords do not match.")
    
    # try to create a new user; an IntegrityError is raised if the username is already taken
    try:
        user = User.objects.create_user(username = username, password = password)
        user.save()
    except IntegrityError:
        return Response("IntegrityError: Username is already taken.")

    login(request, user)
    return Response("Successfully registered the user.")


# Log the user in.
@api_view(["POST"])
def login_view(request):
    # validate the users credentials
    credentials = LoginForm(request.POST)
    if not credentials.is_valid():
        return Response("Invalid credentials - form is invalid")
    
    user = authenticate(
        request, 
        username = credentials.cleaned_data["username"], 
        password = credentials.cleaned_data["password"]
    )
    if not user:
        return Response("Invalid credentials - username and/or password are incorrect.")

    login(request, user)
    return Response("Successfully logged the user in.")

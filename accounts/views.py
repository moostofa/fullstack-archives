import json

from django.contrib.auth import authenticate, login
from django.db import IntegrityError

from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .forms import LoginForm, RegistrationForm
from .models import User
from .serializers import LoginSerializer, RegistrationSerializer


# Return a list of usernames. 
# This endpoint is called in the frontend registration form to guard against duplicate usernames on client-side.
class UsernameListView(APIView):
    def get(self, request):
        usernames = User.objects.values_list("username", flat=True)
        return Response(usernames)


class RegisterView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "success": True,
                "message": "Successfully registered the user.",
                "token": Token.objects.get(user=user).key
            })
        else:
            return Response({
                "success": False,
                **serializer.errors
            })


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response("POST data sent to /login does not match LoginSerializer fields.")
        return Response(serializer.data)


# Register the user
@api_view(["POST"])
def register_view(request):
    # get form data and validate passwords & username
    data = json.loads(request.body)
    username = data.get("username")
    password1 = data.get("password1")
    password2 = data.get("password2")

    return Response({
        "UUUUSARNEM": username,
        "PAAASWURDWON": password1,
        "PAASWURD2": password2
    })

    if password1 != password2:
        return Response("Invalid credentials - passwords do not match.")
    
    # try to create a new user; an IntegrityError is raised if the username is already taken
    try:
        user = User.objects.create_user(username = username, password = password1)
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

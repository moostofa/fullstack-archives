from django.contrib.auth import authenticate, login
from django.db import IntegrityError
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .forms import LoginForm, RegistrationForm
from .models import User
from .serializers import UsernameSerializer


# Register the user
@api_view(["GET", "POST"])
def register_view(request):
    if request.method == "GET":
        usernames = User.objects.all()
        serializer = UsernameSerializer(usernames, many=True)
        return Response(serializer.data)
    else:
        # get form data and validate passwords & username
        credentials = RegistrationForm(request.POST)
        if not credentials.is_valid():
            return HttpResponse("Error in register view: Invalid credentials - form is invalid")

        username = credentials.cleaned_data["username"]
        password = credentials.cleaned_data["password"]
        confirm_password = credentials.cleaned_data["confirm_password"]

        if password != confirm_password:
            return HttpResponse("Error in register view: Invalid credentials - passwords do not match.")
        
        # try to create a new user; an IntegrityError is raised if the username is already taken
        try:
            user = User.objects.create_user(username = username, password = password)
            user.save()
        except IntegrityError:
            return HttpResponse("IntegrityError in register view: Username is already taken.")

        login(request, user)
        return HttpResponseRedirect(reverse("index"))


# Log the user in
def login_view(request):
    if request.method == "GET":
        return render(request, "accounts/authenticate.html", {
            "action": "Login",
            "form": LoginForm()
        })
    else:
        # validate the users credentials
        credentials = LoginForm(request.POST)
        if not credentials.is_valid():
            return HttpResponse("Error in login view: Invalid credentials - form is invalid")
        
        user = authenticate(
            request, 
            username = credentials.cleaned_data["username"], 
            password = credentials.cleaned_data["password"]
        )
        if not user:
            return HttpResponse("Error in login view: Invalid credentials - username and/or password are incorrect.")

        login(request, user)
        return HttpResponseRedirect(reverse("index"))

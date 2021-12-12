from django.contrib.auth import login
from django.db import IntegrityError
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .forms import RegistrationForm, LoginForm
from .models import User


# Register the user
def register_view(request):
    if request.method == "GET":
        return render(request, "accounts/authenticate.html", {
            "action": "Register",
            "form": RegistrationForm()
        })
    else:
        # get form data and validate passwords & username
        credentials = RegistrationForm(request.POST)
        if not credentials.is_valid():
            return HttpResponse("Invalid credentials - form is invalid")

        username = credentials.cleaned_data["username"]
        password = credentials.cleaned_data["password"]
        confirm_password = credentials.cleaned_data["confirm_password"]

        if password != confirm_password:
            return HttpResponse("Invalid credentials - passwords do not match. TODO: Validate this on client-side,")
        
        # try to create a new user; an IntegrityError is raised if the username is already taken
        try:
            user = User.objects.create_user(username = username, password = password)
            user.save()
        except IntegrityError:
            return HttpResponse("Username is already taken - TODO: check this on client side")
        
        login(request, user)
        return HttpResponseRedirect(reverse("index"))


# Log the user in
def login_view(request):
    if request.method == "GET":
        return render(request, "accounts/authenticate.html", {
            "action": "Login",
            "form": LoginForm()
        })

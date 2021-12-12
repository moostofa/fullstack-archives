from django.shortcuts import render
from django.http.response import HttpResponse

from .forms import RegistrationForm

# Create your views here.
def register(request):
    if request.method == "GET":
        return render(request, "registration/register.html", {
            "form": RegistrationForm()
        })
    else:
        return HttpResponse("Register the user")
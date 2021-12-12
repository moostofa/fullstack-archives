from django.shortcuts import render
from django.http.response import HttpResponse

# Create your views here.
def index(request):
    user = request.user.username if request.user.is_authenticated else "Not logged in"
    return HttpResponse(f"Hello world! User: {user}")
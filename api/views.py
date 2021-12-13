from django.shortcuts import render
from django.http.response import HttpResponse

def index(request):
    user = request.user.username if request.user.is_authenticated else "Not logged in"
    return HttpResponse(f"Hello world! User: {user}")


def books(request):
    return HttpResponse("<h1>Books page</h1>")


def anime(request):
    return HttpResponse("<h1>Anime page</h1>")


def manga(request):
    return HttpResponse("<h1>Manga page</h1>")
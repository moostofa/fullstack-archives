from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Book, Anime, Manga

from .seralizers import ItemListSerializer

def index(request):
    user = request.user.username if request.user.is_authenticated else "Not logged in"
    return HttpResponse(f"Hello world! User: {user}")


@api_view(["GET"])
def books(request):
    books = Book.objects.all()
    serializer = ItemListSerializer(books, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def anime(request):
    anime = Anime.objects.all()
    serializer = ItemListSerializer(anime, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def manga(request):
    manga = Manga.objects.all()
    serializer = ItemListSerializer(manga, many=True)
    return Response(serializer.data)

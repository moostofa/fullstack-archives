from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Book, Anime, Manga
from .seralizers import ItemListSerializer

from archives.settings import GOOGLE_BOOKS_API_KEY

def index(request):
    return HttpResponse(GOOGLE_BOOKS_API_KEY)


@api_view(["GET"])
def books(request):
    return JsonResponse({"ApiKey": GOOGLE_BOOKS_API_KEY})


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

from django.urls import path

from .views import index, books, anime, manga

urlpatterns = [
    path("", index, name="index"),
    path("books", books, name="books"),
    path("anime", anime, name="anime"),
    path("manga", manga, name="manga")
]
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("books", views.books, name="books"),
    path("anime", views.anime, name="anime"),
    path("manga", views.manga, name="manga")
]
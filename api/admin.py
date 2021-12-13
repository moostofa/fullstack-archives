from django.contrib import admin

from .models import Book, Anime, Manga

# Register your models here.
admin.site.register(Book)
admin.site.register(Anime)
admin.site.register(Manga)

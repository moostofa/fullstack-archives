from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Book, Anime, Manga

admin.site.register(User, UserAdmin)
admin.site.register(Book)
admin.site.register(Anime)
admin.site.register(Manga)
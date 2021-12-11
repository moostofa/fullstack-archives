from django.contrib.auth.models import AbstractUser
from django.db.models import CASCADE, ForeignKey, Model
from django.db.models.fields import PositiveIntegerField, TextField


class User(AbstractUser):
    pass


class ItemModel(Model):
    user = ForeignKey(
        User,
        on_delete=CASCADE
    )
    finished = TextField(default="[]")
    unfinished = TextField(default="[]")
    watchlist = TextField(default="[]")
    dropped = TextField(default="[]")
    rating = PositiveIntegerField()

    class Meta:
        abstract = True


class Book(ItemModel):
    pass


class Anime(ItemModel):
    pass


class Manga(ItemModel):
    pass
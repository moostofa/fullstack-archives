from django.db.models import CASCADE, ForeignKey, Model, JSONField

from accounts.models import User

class ItemModel(Model):
    user = ForeignKey(
        User,
        on_delete=CASCADE
    )
    finished = JSONField(default=list)
    unfinished = JSONField(default=list)
    watchlist = JSONField(default=list)
    dropped = JSONField(default=list)

    class Meta:
        abstract = True


class Book(ItemModel):
    pass


class Anime(ItemModel):
    pass


class Manga(ItemModel):
    pass

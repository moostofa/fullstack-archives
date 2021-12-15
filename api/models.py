from django.db.models import CASCADE, ForeignKey, Model, JSONField

from accounts.models import User

default = dict({"item_ids": ["hello", "world"]})

class ItemModel(Model):
    user = ForeignKey(
        User,
        on_delete=CASCADE
    )
    finished = JSONField(default=default)
    unfinished = JSONField(default=default)
    watchlist = JSONField(default=default)
    dropped = JSONField(default=default)

    class Meta:
        abstract = True


class Book(ItemModel):
    pass


class Anime(ItemModel):
    pass


class Manga(ItemModel):
    pass

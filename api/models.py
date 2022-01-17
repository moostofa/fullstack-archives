from django.db.models import CASCADE, ForeignKey, Model, JSONField

from accounts.models import User

default = dict(
    finished = ["this", "is", "the", "finished", "list"], 
    unfinished = ["this", "is", "the", "finished", "list"], 
    watchlist = ["this", "is", "the", "finished", "list"], 
    dropped = ["this", "is", "the", "finished", "list"]
)

class UsersList(Model):
    user = ForeignKey(
        User,
        on_delete=CASCADE
    )
    books = JSONField(default = default)
    anime = JSONField(default = default)
    manga = JSONField(default = default)

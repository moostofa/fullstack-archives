from rest_framework.fields import CharField
from rest_framework.serializers import ModelSerializer, Serializer

from .models import UsersList

""" Serialize a user's list of books, anime and manga """
class ItemListSerializer(ModelSerializer):
    class Meta:
        model = UsersList
        fields = "__all__"


""" Serialize & handle the CRUD operations on the user's lists """
class ActionSerializer(Serializer):
    item_id = CharField()
    subject = CharField()
    field_add = CharField(default=None)
    field_remove = CharField(default=None)

    def save(self, **kwargs):
        item = self.validated_data["item_id"]
        subject = self.validated_data["subject"]
        add = self.validated_data["field_add"]
        remove = self.validated_data["field_remove"]

        user = UsersList.objects.get_or_create(user=kwargs.get("user"))[0]
        users_list = getattr(user, subject)

        # add, remove, or update(add+remove)
        if add:
            users_list[add].append(item)
        if remove:
            users_list[remove].remove(item)

        # update the instance in DB
        setattr(user, subject, users_list)
        user.save(update_fields=[subject])

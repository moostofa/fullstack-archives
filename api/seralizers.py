from rest_framework.fields import CharField
from rest_framework.serializers import ModelSerializer, Serializer

from .models import UsersList

class ItemListSerializer(ModelSerializer):
    class Meta:
        model = UsersList
        fields = "__all__"


class ActionSerializer(Serializer):
    item_id = CharField()
    subject = CharField()
    field_add = CharField(allow_blank=True)
    field_remove = CharField(allow_blank=True)
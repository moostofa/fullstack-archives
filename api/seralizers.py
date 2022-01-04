from rest_framework.serializers import ModelSerializer

from .models import ItemModel

class ItemListSerializer(ModelSerializer):
    class Meta:
        model = ItemModel
        fields = "__all__"
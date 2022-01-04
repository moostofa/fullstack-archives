from rest_framework.serializers import ModelSerializer

from .models import UsersList

class ItemListSerializer(ModelSerializer):
    class Meta:
        model = UsersList
        fields = "__all__"
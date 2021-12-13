from rest_framework.serializers import ModelSerializer

from .models import Book

class ItemListSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"
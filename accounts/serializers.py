from rest_framework.serializers import ModelSerializer

from .models import User

class UsernameSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]
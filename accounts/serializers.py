from rest_framework.serializers import ModelSerializer, CharField

from .models import User

class UsernameSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class RegistrationSerializer(ModelSerializer):
    password_confirm = CharField()
    class Meta:
        model = User
        fields = ["username", "password", "password_confirm"]


class LoginSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
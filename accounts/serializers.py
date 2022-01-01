from rest_framework.serializers import (CharField, ModelSerializer,
                                        ValidationError)

from .models import User

class LoginSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]

class RegistrationSerializer(ModelSerializer):
    password_confirm = CharField()
    class Meta:
        model = User
        fields = ["username", "password", "password_confirm"]

    def save(self):
        username = self.validated_data["username"]
        password = self.validated_data["password"]
        password_confirm = self.validated_data["password_confirm"]
        
        if password != password_confirm:
            raise ValidationError({"password": "Invalid credentials: Passwords do not match."})

        # create user; this serializer seems to already take care of possible username duplicates. Nice.
        user = User.objects.create_user(username = username, password = password)
        user.save()
        return user

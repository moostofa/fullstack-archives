from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import RegistrationSerializer


# Return a list of usernames.
# This endpoint is called in the frontend registration form to guard against duplicate usernames on client-side.
class UsernameListView(APIView):
    def get(self, request):
        usernames = User.objects.values_list("username", flat=True)
        return Response(usernames)


# Register the user and return an auth token to identify them.
# The token will be saved in localStorage in the frontend to identify a user.
class RegisterView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "success": True,
                "message": "Successfully registered the user.",
                "token": Token.objects.get(user=user).key
            })
        else:
            return Response({
                "success": False,
                **serializer.errors
            })

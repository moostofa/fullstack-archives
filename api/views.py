from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import UsersList
from .seralizers import ItemListSerializer, ActionSerializer


# Return a list of all of the user's items.
class AllItems(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        users_list = UsersList.objects.get(user = user)
        serializer = ItemListSerializer(users_list)
        return Response(serializer.data)


# Add an item to a user's list
class Add(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        serializer = ActionSerializer(request.data)
        return Response(serializer.data)


# Delete an item from a user's list
class Delete(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        return Response("Delete an item from the user's list.")


# Move an item from one list to another
class Update(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        return Response("Update an item in the user's list.")

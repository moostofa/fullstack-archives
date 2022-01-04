from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Anime, Book, Manga
from .seralizers import ItemListSerializer


# Return a list of all of the user's items.
class AllItems(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response("Return a user's entire profile.")


class Add(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response("Add an item to the user's list.")


class Delete(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response("Delete an item from the user's list.")


class Update(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        return Response("Update an item in the user's list.")

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
        user = request.user
        anime = Anime.objects.get(user=user)
        books = Book.objects.get(user=user)
        manga = Manga.objects.get(user=user)
        users_list = anime | books | manga
        return Response(users_list)


# Add an item to a user's list
class Add(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        return Response("Add an item to the user's list.")


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

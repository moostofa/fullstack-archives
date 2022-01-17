from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import UsersList
from .seralizers import ItemListSerializer, ActionSerializer


""" Return a list of all of the user's items """
class AllItems(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        users_list = UsersList.objects.get(user=user)
        serializer = ItemListSerializer(users_list)
        return Response(serializer.data)


""" Perform CRUD oeprations on any of the user's lists """
class Action(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        serializer = ActionSerializer(request.data)
        return Response({
            "kwargs": {
                "action to perform": kwargs.get("action"),
                "subject": kwargs.get("subject")
            },
            "user": str(user),
            **serializer.data
        })

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

        # validate action and subject parameters
        action: str = kwargs.get("action")
        if action not in ["add", "delete", "update"]:
            return Response({
                "success": False,
                "message": f"Invalid action; {action} cannot be performed."
            })
        
        subject: str = kwargs.get("subject").lower()
        if subject not in ["books", "anime", "manga"]:
            return Response({
                "success": False,
                "message": f"Invalid subject; {subject} is not a valid parameter."
            })

        return Response({
            "action": f"Perform {action} operation on {subject} list.",
            "user": str(request.user),
            **ActionSerializer(request.data).data
        })

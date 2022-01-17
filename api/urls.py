from django.urls import path

from .views import AllItems, Add, Delete, Update, Action

urlpatterns = [
    path("all", AllItems.as_view(), name="all"),
    path("<str:subject>/<str:action>", Action.as_view(), name="action"),
    path("add", Add.as_view(), name="add"),
    path("delete", Delete.as_view(), name="delete"),
    path("update", Update.as_view(), name="update")
]
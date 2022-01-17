from django.urls import path

from .views import AllItems, Action

urlpatterns = [
    path("all", AllItems.as_view(), name="all"),
    path("<str:subject>/<str:action>", Action.as_view(), name="action"),
]
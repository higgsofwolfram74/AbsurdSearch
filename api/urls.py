from django.urls import path
from . import views

urlpatterns = [
        path('num=<int:num>&words=<str:words>/', views.jquery),
        path('words=<str:words>/', views.jquery)
]

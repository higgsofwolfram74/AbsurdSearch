from django.urls import path
from . import views

urlpatterns = [
        path('', views.home, name='wordsearch-home'),
        path('q/<str:words>/', views.jquery, name='wordsearch-json')
]

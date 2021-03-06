from django.urls import path
from . import views

urlpatterns = [
        path('about/', views.index, name="wordsearch-about"),
        path('generator/', views.index, name="wordsearch-generator"),
        path('solver/', views.index, name="wordsearch-solver"),
        path('viewer/', views.index, name="wordsearch-viewer"),
        path('', views.index, name='wordsearch-about'),
]

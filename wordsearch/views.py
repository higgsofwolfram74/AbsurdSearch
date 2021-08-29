from typing import Optional
from django.shortcuts import render
from django.http import JsonResponse
from . import serializer

#submit words with GET, return wordsearch
# Create your views here.
def home(request):
    return render(request, "wordsearch/home.html")

def jquery(request, words="") -> Optional[JsonResponse]:
    if not words:
        return None
    
    word_dict = serializer.serializer(words)

    return JsonResponse(word_dict)
        


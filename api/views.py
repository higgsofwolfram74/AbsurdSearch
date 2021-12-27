from django.shortcuts import render

# Create your views here.
from typing import Optional
from pathlib import Path
import random

from django.shortcuts import render
from django.http import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from . import serializer
from .models import Words
from .forms import UploadFileForm
from .validator import validation

import json


def jquery(request, words="", num=50) -> Optional[JsonResponse]:
    if not words:
        return None
    
    word_dict = serializer.serializer(words)

    print(word_dict["wordlist"])

    word_dict["wordlist"] += random.choices(Words.objects.get(pk=1).words["words"], k = num)

    random.shuffle(word_dict["wordlist"])
    
    return JsonResponse(word_dict)
        
@csrf_exempt
def file_upload(request):
    if request.method == 'POST':

        response = validation(request.FILES['file'])

        if response == None:
            raise Http404("Bad file upload")
        
        return JsonResponse({"words": response["wordslist"]})
    
    else:
        form = UploadFileForm()
        raise Http404("Incorrect method")

    raise Http404("Unknown error")
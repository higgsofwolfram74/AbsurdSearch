from django.shortcuts import render

# Create your views here.
from typing import Optional
from pathlib import Path
import random

from django.shortcuts import render
from django.http import JsonResponse
from . import serializer
from .models import Words

import json




def jquery(request, words="", num=50) -> Optional[JsonResponse]:
    if not words:
        return None
    
    word_dict = serializer.serializer(words)

    print(word_dict["wordlist"])

    word_dict["wordlist"] += random.choices(Words.objects.get(pk=1).words["words"], k = num)

    random.shuffle(word_dict["wordlist"])
    
    return JsonResponse(word_dict)
        
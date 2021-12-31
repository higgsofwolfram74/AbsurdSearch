from typing import Optional
import random
from functools import reduce
import operator

from django.shortcuts import render
from django.http import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt

import rust2py

from . import serializer
from .models import Words
from .forms import UploadFileForm
from .validator import validation



def jquery(request, words="", num=50) -> Optional[JsonResponse]:
    if not words:
        return None
    
    word_dict = serializer.serializer(words)

    word_dict["wordlist"] += random.choices(Words.objects.get(pk=1).words["words"], k = num)

    random.shuffle(word_dict["wordlist"])
    
    return JsonResponse(word_dict)
        
@csrf_exempt
def wordsearch_upload(request):
    if request.method == 'POST':
        response = validation(request.FILES['myFile'])

        if response == None:
            raise Http404("Bad file upload")

        words_found = list(map(list, rust2py.start(
            reduce(operator.add, response["wordsearch"]),
            len(response["wordsearch"][0]), 
            set(response["wordslist"]))))

        collected_words = set()
        final = []

        for word in words_found:
            if word[0] not in collected_words:
                collected_words.add(word[0])
                final.append(word)
        
        return JsonResponse({"words": final})
    
    else:
        form = UploadFileForm()
        raise Http404("Incorrect method")

    raise Http404("Unknown error")

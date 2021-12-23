from django.shortcuts import render

# Create your views here.
from typing import Optional
from pathlib import Path
import random

from django.shortcuts import render
from django.http import FileResponse
from . import serializer, writer
from .models import Words

import json
import io



def jquery(request, words="", num=50) -> Optional[FileResponse]:
    if not words:
        return None
    
    word_dict = serializer.serializer(words)

    print(word_dict["wordlist"])

    word_dict["wordlist"] += random.choices(Words.objects.get(pk=1).words["words"], k = num)

    random.shuffle(word_dict["wordlist"])

    filelike = io.BytesIO(json.dumps(word_dict).encode('utf-8'))

    return FileResponse(filelike, as_attachment=False, filename="Wordsearch.json")
        
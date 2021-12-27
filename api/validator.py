from typing import Optional, Dict
from django.core.files import File
import json

def validation(obj: File) -> Optional[Dict]:
    print(obj.name, obj.size)
    if obj.name.split(".")[1] != "json":
        print("yo")
        return None

    elif obj.size >= 700000:
        print("yo2")
        return None

    else:
        response = json.load(obj)
        print(response.keys())
        
        return {"wordslist": response["wordslist"], "wordsearch": response["wordsearch"]}
    
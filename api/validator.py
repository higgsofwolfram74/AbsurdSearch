from typing import Optional, Dict
from django.core.files import File
import json

def validation(obj: File) -> Optional[Dict]:
    print(obj.name, obj.size)
    if obj.name.split(".")[1] != "json":
        print("File is not JSON formatted")
        return None

    elif obj.size >= 2000000:
        print("File is too large")
        return None

    else:
        response = json.load(obj)
        
        return {"wordslist": response["wordslist"], "wordsearch": response["wordsearch"]}
    
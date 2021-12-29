from typing import List, Dict, Optional
import re
from . import worder

def serializer(words: str) -> Optional[Dict]:

    wordlist: List[str] = re.split(r'-|_', words)
    wordsearch: worder.WordsearchGenerator = worder.create(wordlist)

    jsonifer = {
        "wordlist": wordlist,
        "wordsearch": wordsearch.to_list() 
    }

    return jsonifer
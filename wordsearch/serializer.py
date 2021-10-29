from typing import Dict, Optional
from pathlib import Path
from . import worder

    
def serializer(words: str) -> Optional[Dict]:
    pathy = Path(__file__).parent / "Sources/myDict.txt"
    lexicon = worder.Dictionary(pathy)
    wordlist = worder.Words(words.strip('"').split("_"))
    wordsearch = worder.WordsearchGenerator(wordlist, lexicon)
    wordsearch.generate_wordsearch()
    wordsearch.random_words(num_of_words=50)

    jsonifer = {
        "wordlist": wordsearch.words.words,
        "wordsearch": str(wordsearch) 
    }

    return jsonifer
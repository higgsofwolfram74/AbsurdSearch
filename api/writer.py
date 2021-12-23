import json
from pathlib import Path

def my_write(some_dict):
    json.dump(some_dict, Path("./Sources/Wordsearch.json").open("w"))
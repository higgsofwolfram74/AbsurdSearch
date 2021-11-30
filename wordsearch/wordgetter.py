from pathlib import Path

def random_words(path: Path):
    with path.open("r") as f:
        return list(map(lambda x: x.strip("\n"), f.readlines()))
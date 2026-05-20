from pathlib import Path


GENERATED_DIRS = [
    Path("data/cache"),
    Path("data/embeddings"),
]


def main() -> None:
    for directory in GENERATED_DIRS:
        for path in directory.glob("*"):
            if path.name == ".gitkeep":
                continue
            if path.is_file():
                path.unlink()


if __name__ == "__main__":
    main()

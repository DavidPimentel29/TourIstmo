from pathlib import Path

from src.rag.indexer import index_documents


def main() -> None:
    sample_documents = {
        "welcome": "Add source documents here to build embeddings.",
    }
    store = index_documents(sample_documents)
    output_path = Path("data/embeddings/sample_embeddings.txt")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(str(store.vectors), encoding="utf-8")


if __name__ == "__main__":
    main()

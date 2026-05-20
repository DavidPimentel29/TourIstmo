from .embedder import embed_text
from .vector_store import InMemoryVectorStore


def index_documents(documents: dict[str, str]) -> InMemoryVectorStore:
    store = InMemoryVectorStore()

    for document_id, text in documents.items():
        store.add(document_id, embed_text(text), text)

    return store

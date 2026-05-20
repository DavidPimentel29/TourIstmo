from collections.abc import Iterable


def retrieve(query: str, documents: Iterable[str], limit: int = 3) -> list[str]:
    if limit < 1:
        raise ValueError("Limit must be greater than zero.")

    terms = set(query.lower().split())
    scored = []

    for document in documents:
        score = len(terms.intersection(document.lower().split()))
        scored.append((score, document))

    ranked = sorted(scored, key=lambda item: item[0], reverse=True)
    return [document for score, document in ranked[:limit] if score > 0]

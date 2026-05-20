from hashlib import sha256


def embed_text(text: str) -> list[float]:
    """Create a deterministic placeholder embedding for local testing."""
    if not text.strip():
        raise ValueError("Text cannot be empty.")

    digest = sha256(text.encode("utf-8")).digest()
    return [value / 255 for value in digest[:16]]

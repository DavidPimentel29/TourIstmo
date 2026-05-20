def chunk_text(text: str, chunk_size: int = 500) -> list[str]:
    if chunk_size < 1:
        raise ValueError("Chunk size must be greater than zero.")

    clean_text = text.strip()
    return [clean_text[index : index + chunk_size] for index in range(0, len(clean_text), chunk_size)]

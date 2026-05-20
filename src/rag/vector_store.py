from dataclasses import dataclass, field


@dataclass
class InMemoryVectorStore:
    vectors: list[tuple[str, list[float], str]] = field(default_factory=list)

    def add(self, document_id: str, vector: list[float], text: str) -> None:
        self.vectors.append((document_id, vector, text))

    def all_text(self) -> list[str]:
        return [text for _, _, text in self.vectors]

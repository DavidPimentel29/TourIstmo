from abc import ABC, abstractmethod
from dataclasses import dataclass


@dataclass
class LLMResponse:
    text: str
    model: str
    provider: str


class BaseLLM(ABC):
    """Common interface for language model clients."""

    def __init__(self, model: str) -> None:
        self.model = model

    @abstractmethod
    def generate(self, prompt: str) -> LLMResponse:
        """Generate a response for a prompt."""

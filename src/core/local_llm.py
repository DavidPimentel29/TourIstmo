from .base_llm import BaseLLM, LLMResponse


class LocalLLM(BaseLLM):
    """Local or self-hosted model placeholder."""

    def generate(self, prompt: str) -> LLMResponse:
        if not prompt.strip():
            raise ValueError("Prompt cannot be empty.")

        return LLMResponse(
            text="Local model client is not configured yet.",
            model=self.model,
            provider="local",
        )

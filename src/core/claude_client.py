from .base_llm import BaseLLM, LLMResponse


class ClaudeClient(BaseLLM):
    """Anthropic Claude client placeholder."""

    def generate(self, prompt: str) -> LLMResponse:
        if not prompt.strip():
            raise ValueError("Prompt cannot be empty.")

        return LLMResponse(
            text="Claude client is not configured yet.",
            model=self.model,
            provider="anthropic",
        )

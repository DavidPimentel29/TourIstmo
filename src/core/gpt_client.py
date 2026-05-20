from .base_llm import BaseLLM, LLMResponse


class GPTClient(BaseLLM):
    """OpenAI GPT client placeholder."""

    def generate(self, prompt: str) -> LLMResponse:
        if not prompt.strip():
            raise ValueError("Prompt cannot be empty.")

        return LLMResponse(
            text="OpenAI client is not configured yet.",
            model=self.model,
            provider="openai",
        )

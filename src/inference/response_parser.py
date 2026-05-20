from src.core.base_llm import LLMResponse


def parse_response(response: LLMResponse) -> dict[str, str]:
    return {
        "text": response.text,
        "model": response.model,
        "provider": response.provider,
    }

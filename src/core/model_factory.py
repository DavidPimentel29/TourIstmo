from .claude_client import ClaudeClient
from .gpt_client import GPTClient
from .local_llm import LocalLLM


def create_model(provider: str, model: str):
    provider_name = provider.lower()

    if provider_name == "openai":
        return GPTClient(model=model)
    if provider_name == "anthropic":
        return ClaudeClient(model=model)
    if provider_name == "local":
        return LocalLLM(model=model)

    raise ValueError(f"Unsupported provider: {provider}")

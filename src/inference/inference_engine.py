from src.core.base_llm import BaseLLM, LLMResponse
from src.prompts.templates import build_prompt


class InferenceEngine:
    def __init__(self, llm: BaseLLM) -> None:
        self.llm = llm

    def run(self, user_message: str) -> LLMResponse:
        prompt = build_prompt(user_message)
        return self.llm.generate(prompt)

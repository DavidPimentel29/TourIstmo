DEFAULT_SYSTEM_PROMPT = "You are a helpful AI assistant."


def build_prompt(user_message: str, system_prompt: str = DEFAULT_SYSTEM_PROMPT) -> str:
    if not user_message.strip():
        raise ValueError("User message cannot be empty.")

    return f"System: {system_prompt}\nUser: {user_message}"

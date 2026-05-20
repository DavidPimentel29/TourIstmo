import pytest

from src.prompts.templates import build_prompt


def test_build_prompt_includes_system_and_user_messages():
    prompt = build_prompt("Plan a trip to Panama.")

    assert "System:" in prompt
    assert "User: Plan a trip to Panama." in prompt


def test_build_prompt_rejects_empty_message():
    with pytest.raises(ValueError):
        build_prompt("")

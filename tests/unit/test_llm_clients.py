import pytest

from src.core.model_factory import create_model


def test_model_factory_creates_openai_client():
    client = create_model("openai", "gpt-4o-mini")

    assert client.generate("Hello").provider == "openai"


def test_model_factory_rejects_unknown_provider():
    with pytest.raises(ValueError):
        create_model("unknown", "example-model")

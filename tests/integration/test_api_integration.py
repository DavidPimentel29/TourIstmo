import os

import pytest


@pytest.mark.skipif(
    not os.getenv("RUN_API_TESTS"),
    reason="Set RUN_API_TESTS=1 and API keys to enable live integration tests.",
)
def test_live_api_integration_placeholder():
    assert os.getenv("OPENAI_API_KEY") or os.getenv("ANTHROPIC_API_KEY")

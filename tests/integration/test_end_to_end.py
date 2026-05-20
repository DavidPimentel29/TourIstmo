from src.core.model_factory import create_model
from src.inference.inference_engine import InferenceEngine


def test_end_to_end_inference_placeholder():
    llm = create_model("local", "local-placeholder")
    engine = InferenceEngine(llm)

    response = engine.run("Create a travel recommendation.")

    assert response.provider == "local"
    assert response.text

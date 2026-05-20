from collections.abc import Callable, Iterable


PromptStep = Callable[[str], str]


def run_chain(initial_input: str, steps: Iterable[PromptStep]) -> str:
    result = initial_input

    for step in steps:
        result = step(result)

    return result

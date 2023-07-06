import ast
import inspect
import typing as t
from types import FunctionType

from astunparse import unparse


def get_source(
        func: FunctionType,
        strip_decorators: bool = True,
        strip_signature: bool = False,  # aka. body_only
        strip_return: bool = False,
) -> str:
    """
    https://stackoverflow.com/a/57040815
    notice: if either `strip_decorators` or `strip_signature` is True, the
        output code may slightly changed by removing *unnecessary* line breaks.
    """
    body: t.List[ast.stmt]
    code: str
    module: t.Union[ast.AST, ast.Module]
    out: str
    target_func: t.Union[ast.stmt, ast.FunctionDef]
    
    code = inspect.getsource(func)
    if strip_decorators or strip_signature:
        module = ast.parse(code)
        target_func = module.body[0]
        if strip_decorators:
            target_func.decorator_list.clear()
        if strip_return:
            # FIXME: support only stripping final-line return
            if target_func.body and isinstance(
                    target_func.body[-1],
                    ast.Return
            ):
                target_func.body.pop()
        if strip_signature:
            body = target_func.body
            out = unparse(body)
        else:
            out = unparse(target_func)
    else:
        out = code
    return out.strip()

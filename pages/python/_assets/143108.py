import inspect
import typing as t
from textwrap import dedent
from types import FunctionType

import libcst as cst


def get_func_source(
    func: FunctionType,
    strip_decorators: bool = True,
    strip_signature: bool = False,  # aka. body_only
    strip_return: bool = False,
) -> str:
    body: cst.IndentedBlock
    code: str
    module: cst.Module
    out: str
    target_func: cst.FunctionDef
    
    code = dedent(inspect.getsource(func))
    if strip_decorators or strip_signature:
        module = cst.parse_module(code)
        target_func = module.body[0]
        if strip_decorators:
            for d in target_func.decorators:
                target_func = target_func.deep_remove(d)
        if strip_return:
            try:
                return_node = target_func.body.body[-1].body[0]  # noqa
            except IndexError:
                pass
            else:
                if isinstance(return_node, cst.Return):
                    target_func = target_func.deep_remove(return_node)
        if strip_signature:
            body = target_func.body
            out = dedent(cst.Module([body]).code)
        else:
            out = cst.Module([target_func]).code
        # the `out` should be definitely dedented.
        assert not out.startswith('    ')
    else:
        out = code
    return out.strip()

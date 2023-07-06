import os
import re

from argsense import cli
from lk_utils import dumps
from lk_utils import fs
from lk_utils import loads
from lk_utils import textwrap
from lk_utils.time_utils import timestamp

pattern_block = re.compile(
    r'^( *\{\/\* \$py\.\w+(?:\(.*?\))? \*\/\})'
    r'([\s\S]*?)'
    r'(\n *\{\/\* \$py\.end(?:\(\))? \*\/\})',
    re.M
)
pattern_call = re.compile(
    r'( *)\{\/\* \$py\.(\w+)(?:\((.*?)\))? \*\/\}'
    # ~~~~ 1           ~~~~~ 2   ~~~~~ 3
)


@cli.cmd()
def main(file: str, overwrite: bool = False) -> None:
    """
    if file contains a block like below:
        {/* py.embed_codeblock(...) */}
        {/* py.end */}
    we will insert something between them.
    """
    file_i = fs.abspath(file)
    os.chdir(fs.dirpath(file_i))
    print(os.getcwd())

    data_i = loads(file_i, 'plain')
    data_o = pattern_block.sub(lambda m: _replace(m), data_i)
    file_o = file_i if overwrite else '{}.out.{}'.format(*file_i.rsplit('.', 1))
    dumps(data_o, file_o, 'plain')


def _replace(m: re.Match) -> str:
    print(':i')

    m0 = m
    m1 = pattern_call.search(m.group(1))

    func_name = m1.group(2)
    if func_name != 'embed_codeblock':
        return m0.group()
    
    source_file, source_code = eval(
        '{}({})'.format(func_name, m1.group(3)), 
        {'embed_codeblock': _get_source_2}
    )

    indent = len(m1.group(1))
    inserted_text = textwrap.indent(
        textwrap.dedent('''
            {{/* [BOT_MESSAGE] embed source file. updated at {time} */}}

            ```{lang}
            {code}
            ```
        ''').format(
            time=timestamp(),
            lang=source_file.rsplit('.', 1)[1],
            code=source_code.strip(),
        ),
        indent
    )

    # insertion point
    # start, end = m0.span(2)
    # whole_text = m0.group()
    return textwrap.join(
        (
            m0.group(1),
            inserted_text,
            m0.group(3),
        ), 
        indent
    )


# DELETE: this function is not a good idea. use `_get_source_2` instead.
def _get_source(src_file: str, indent_: int = 0) -> str:
    return textwrap.indent(loads(src_file, 'plain'), indent_)


def _get_source_2(src_file: str) -> tuple[str, str]:
    return src_file, loads(src_file, 'plain')


if __name__ == '__main__':
    cli.run(main)

# Configure MDX Syntax Highlighting for PyCharm

entrance: settings - editor - file types.

````yaml
name: MDX
description: MarkdownX
syntax highlighting:
    line comment: '//'
    block comment start: '{/*'
    block comment end: '*/}'
    support paired braces: true
    support paired brackets: true
    support paired parens: true
    support string escapes: true
keywords:
    group 1: |  # markdown symbols
        #
        +
        -
        *
        \
        ~
        _
        ^
        `
    group 2: |  # mdx
        export
        from
        function
        import
        (
        )
        [
        ]
        {
        }
        ;
        <
        >
        />
    group 3: |  # other
        FIXME
        TODO
        ...
        ???
````

screenshots:

...

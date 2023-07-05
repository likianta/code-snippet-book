# Likianta Code Snippet Book

## Development

```sh
npm run dev
```

## Generate static files

```sh
npm run build
```

refresh site -- https://likianta.github.io/code-snippet-book -- to see effect.

### Test SSG in local

```
|= <this_project>
    |= docs
        |- index.html
        |- ...
|= <temp_dir>
    |= code-snippet-book  # symlinked from `<this_project>/docs`
        |- index.html
        |- ...
```

```sh
npm run build
py -m http.server 3001 -d <temp_dir>
```

visit http://localhost:3001/code-snippet-book to see effect.

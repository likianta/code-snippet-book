# Likianta Code Snippet Book

## Motivation

this is mainly for showing something via **[Nextra](https://nextra.site/)** site generator. visit the deployed site effect [here](https://likianta.github.io/code-snippet-book).

## Installation

the main stack is nodejs (nextjs), while the plugin scripts are written in python.

we need to both init them:

nodejs:

```sh
# install by `project.json`
npm install
```

python (poetry):

```sh
# install by pyproject.toml
poetry update
```

## Development

```sh
npm run dev
```

## Deploy

```sh
# build but not deploy (useful for checking if build worked)
npm run build

# build and deploy
npm run deploy
```

notice: make sure there exists `./out/.nojekyll` file (an empty file). otherwise the github pages will be failed finding javascript and stylesheets.

## Test deployment in local

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
poetry run python3 -m http.server 3001 -d <temp_dir>
```

visit http://localhost:3001/code-snippet-book to see effect.

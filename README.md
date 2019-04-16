[![Build Status](https://travis-ci.org/danielso2007/crudReact.svg?branch=master)](https://travis-ci.org/danielso2007/crudReact)
![version](https://img.shields.io/badge/version-0.1.0-blue.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/crudReact.svg)](https://github.com/danielso2007/crudReact/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/crudReact.svg)](https://github.com/danielso2007/crudReact/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/crudReact.svg)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/crudReact.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/crudReact.svg)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub followers](https://img.shields.io/github/followers/danielso2007.svg?label=Follow&style=social)](https://github.com/danielso2007?tab=followers)

# Cadastro de Usuários

    Um app simples de cadastro de usuários usando react.

# Criando backend

#### Pasta backend

```shell
yarn init -y
```

#### Adicionado o json-server

```shell
yarn add json-server
```

#### Adicionar scripts no package.json

```json
"start": "json-server --watch db.json --port 3001"
```

#### Iniciando o servidor

```shell
yarn start
```

# Gerando o CHANGELOG do projeto

```
npm run release -- --release-as 1.0.0  --dry-run

npm run release -- --release-as patch --dry-run

npm run release -- --release-as minor  --dry-run

npm run release -- --release-as major  --dry-run
```
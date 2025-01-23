# TypeScript

Every where you look, **TypeScript** is referred to as a superset of **JavaScript**.

As the name implies, **TypeScript** adds syntax for types to **JavaScript**.

## File Extension

`.ts`

## Creating and Editing tsc.config

Some features require a later compiler than is used by default. If that is the case:

```bash
cd <path/to/file>
tsc --init
```

Open the newly created `tsconfig.json`.

Depending on the error, you will likely edit the following line:

```json
// "lib": []
```

so that it looks like this:

```json
"lib": ["es2015", "dom"]
```

## Compile

If you did not create a `tsconfig.json` above, run the following:

```bash
cd <path/to/file>
tsc <filename>.ts 
```

Otherwise, simply run

```bash
tsc
```

## Execute

```bash
node <filename>.js 
```

## configit.sh

This repository's *devcontainer.json* uses a `postCreateCommand` to run `configit.sh`.

This script uses information particular to the user of the repository.

```shell
#!/bin/bash

git config --global user.email "yourEmail@mail.com"
git config --global user.name "yourGitUserName"
git config --global push.autoSetupRemote true
git config --global push.default current
git config --global init.defaultBranch main
git config --global --add safe.directory $1
```

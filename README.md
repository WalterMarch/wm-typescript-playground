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

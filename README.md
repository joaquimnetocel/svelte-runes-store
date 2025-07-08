# svelte-runes-store

![GITHUB VERSION](https://img.shields.io/github/package-json/v/joaquimnetocel/svelte-runes-store?label=github%20version&logo=github&color=lightgray) ![NPM VERSION](https://img.shields.io/npm/v/svelte-runes-store?color=red&logo=npm&label=npm%20version) ![NPM Downloads](https://img.shields.io/npm/dw/svelte-runes-store?color=red&label=npm%20downloads&logo=npm) ![NPM License](https://img.shields.io/npm/l/svelte-runes-store?color) [![Twitter](https://img.shields.io/twitter/follow/:twitterHandle.svg?style=social&label=@joaquimnetocel)](https://twitter.com/joaquimnetocel)

svelte-runes-store is a svelte package to build (persistent) svelte states that can be shared among components through the context.

![GIF EXAMPLE](./svelte-runes-store.gif)

## VERSIONS

- WORKS WITH SVELTE 5 AND SVELTEKIT.

## FEATURES

- USES THE SVELTE 5 RUNES.
- PERSISTENT AND NON-PERSISTENT STORES.
- TYPESCRIPT SUPPORT.
- ADDS STORES TO THE CONTEXT, AVOIDING STATE SHARING IN SSR.

## INSTALLATION

```bash
npm install svelte-runes-store
```

## EXAMPLES

To run the examples from `/src/routes`:

```bash
git clone https://github.com/joaquimnetocel/svelte-runes-store.git
cd svelte-runes-store
npm install
npm run dev
```

## COMPONENT STRUCTURE

- `store.create`: Function to create the store.
- `store.read`: Function to read the store.

## PARAMETERS

- PARAMETERS OF `store.create`:

| PARAMETER | DESCRIPTION                 | TYPE                               | REQUIRED | DEFAULT        |
| --------- | --------------------------- | ---------------------------------- | -------- | -------------- |
| `value`   | INITIAL VALUE OF THE STORE. | `Generic`                          | YES      | -              |
| `key`     | CONTEXT KEY.                | `string`                           | YES      | -              |
| `storage` | STORAGE TYPE.               | `localStorage` OR `sessionStorage` | NO       | `localStorage` |

- PARAMETERS OF `store.read`:

| PARAMETER | DESCRIPTION  | TYPE     | REQUIRED | DEFAULT |
| --------- | ------------ | -------- | -------- | ------- |
| `key`     | CONTEXT KEY. | `string` | YES      | -       |

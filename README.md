# svelte-runes-store

![GITHUB VERSION](https://img.shields.io/github/package-json/v/joaquimnetocel/svelte-runes-store?label=github%20version&logo=github&color=lightgray) ![NPM VERSION](https://img.shields.io/npm/v/svelte-runes-store?color=red&logo=npm&label=npm%20version) ![NPM Downloads](https://img.shields.io/npm/dw/svelte-runes-store?color=red&label=npm%20downloads&logo=npm) ![NPM License](https://img.shields.io/npm/l/svelte-runes-store?color) [![Twitter](https://img.shields.io/twitter/follow/:twitterHandle.svg?style=social&label=@joaquimnetocel)](https://twitter.com/joaquimnetocel)

svelte-runes-store is a svelte/sveltekit package to build (persistent) svelte stores using runes.

## VERSIONS

- WORKS WITH SVELTE 5 ONLY.

## FEATURES

- USES THE SVELTE 5 RUNES.
- PERSISTENT AND NON PERSISTENT STORES.
- TYPESCRIPT SUPPORT.

## DEMOS

- [REPL: BASIC EXAMPLE](?)
- [REPL: PERSISTENT EXAMPLE](?)

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

- `functionCreateStore`: Function to create the store.
- `functionReadStore`: Function to read the store.

## PARAMETERS

- PROPS OF `functionCreateStore`:

| PARAMETER    | DESCRIPTION                 | TYPE                               | REQUIRED | DEFAULT        |
| ------------ | --------------------------- | ---------------------------------- | -------- | -------------- |
| `value`      | INITIAL VALUE OF THE STORE. | `Generic`                          | YES      | -              |
| `name`       | STORE NAME.                 | `string`                           | YES      | -              |
| `persistent` | PERSISTENT STORE (OR NOT).  | `boolean`                          | NO       | `false`        |
| `storage`    | STORAGE TYPE.               | `localStorage` OR `sessionStorage` | NO       | `localStorage` |

- PROPS OF `functionReadStore`:

| PARAMETER | DESCRIPTION | TYPE     | REQUIRED | DEFAULT |
| --------- | ----------- | -------- | -------- | ------- |
| `name`    | STORE NAME. | `string` | YES      | -       |

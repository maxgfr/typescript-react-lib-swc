# typescript-react-lib-swc

A simple react boilerplate for creating a library of components made in typescript using `swc`.

It also uses:
- `storybook` for viewing a components
- `testing-library` for testing components
- `semantic-release` for publishing a package for this library components

## Clone repository and install dependencies

```sh
git clone https://github.com/maxgfr/typescript-react-lib-swc # For cloning the repository
cd typescript-react-lib-swc # To navigate to the repository root
pnpm install # Install dependencies
```

## Building the code

```sh
pnpm run build # For building the code with typechecking
pnpm run build:swc # For building without typechecking
```

> **:warning: No typechecking made in dev mode**

## Testing the code

```sh
pnpm test # For running unit test
pnpm test:watch # For watching unit test
```

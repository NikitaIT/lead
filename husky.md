# Husky

```bash setup project
npx husky install
```

## Env

```bash commitlint
npm i -D @commitlint/{cli,config-conventional,config-nx-scopes,cz-commitlint} commitizen
```

## Env config

```bash commitlint
echo "module.exports = {extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes']}" > commitlint.config.js
```

## Env Hook

```bash commitlint
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

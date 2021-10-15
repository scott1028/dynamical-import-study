# Introduce how dynamical import used in browser platform

- `/main.js`

```js
// NOTE: it could be used in browser environment directly

export function hello() {
  console.debug('Hello', window._);
}

const test = () => {
  console.debug('Default export function', window._);
}

export default test;
```

- Test: `import('/main.js').then(module => module.hello())`

// NOTE: it could be used in browser environment directly

export function hello() {
  console.debug('Hello', window._);
}

const test = () => {
  console.debug('Default export function', window._);
}

export default test;

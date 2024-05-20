# ToolMaker

## What's this?

> This is a tool function to make you more convenient to use the tools you need.(a simple lodash)

## How to use?

### install

```javascript
  pnpm i toolmaker
```

### use

For example, you want to use the debounce function, you can import it like this:

```javascript
import { debounce } from 'toolmaker'
const fn = () => console.log('hello')
const debounceFn = debounce(fn, 1000)
debounceFn()
```

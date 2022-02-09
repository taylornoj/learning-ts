TypScript can recognize the else block of an if/else statement as being the opposite type guard check of the if statement's type guard check:

``` typescript
function formatPadding(padding: string | number) {
  if (typeof padding === 'string') {
    return padding.toLowerCase();
  } else {
    return `${padding}px`;
  }
}
```

The type guard, ```typeof padding === 'string'``` tells TypeScript that padding within the if statement's block must be a string; but TypeScript is also able to infer that since the padding argument is typed as the union ```string | number```, padding must be a number type within the else block
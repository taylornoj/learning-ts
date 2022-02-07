Typing with unions gives more flexibility but there's more to consider.

``` typescript
function getMarginLeft(margin: string | number) {
  // ...
}
```

Since ```margin``` can be a string or a number, we may want to perform different logic in the ```getMarginLeft()``` functions body that does one thing for strings and another for numbers

``` typescript
function getMarginLeft(margin: string | number) {
  // margin may be a string or number here
 
  if (typeof margin === 'string') {
    // margin must be a string here
    return margin.toLowerCase();
  }
}
```

If we tried to call ```margin.toLowerCase()``` outside of the string type guard, TypeScript would complain that the ```.toLowerCase()``` method does not exist on our number types

This concept is called Type Narrowing - when TypeScript can figure out what type a variable can be at a given point in our code
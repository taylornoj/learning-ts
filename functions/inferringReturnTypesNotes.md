TypeScript can infer the types of values returned by functions; this is possible by looking at the types of values after a function's return statements

This can help us fix bugs:

``` typescript
function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
 
const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.
```

TypeScript is able to infer that ```liquid amount``` was being assigned a value of type string, despite it being declared as a variable of type number
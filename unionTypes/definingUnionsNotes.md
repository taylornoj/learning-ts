Unions allow us to define multiple allowed type members by separating each type member with a vertical line character ```|```

``` typescript
let ID: string | number; // this is the union
 
// number
ID = 1;
 
// or string
ID = '001';
 
console.log(`The ID is ${ID}.`);
```
we can also have unions in function parameters...

``` typescript
function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}
```


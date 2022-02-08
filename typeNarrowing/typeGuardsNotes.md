Type Guards can use a variety of operators that check for a variable's type

One operator we can use is ```typeof```:

``` typescript
function formatDate(date: string | number) {
  // date can be a number or string here
 
  if (typeof date === 'string') { 
    // date must be a string type
  }
}
```

TypeScript infers that ```date``` must be a string because ```typeof``` checked that it is

TypeScript can recognize ```typeof``` type guards that check for these specific values (string, number, boolean and symbol)
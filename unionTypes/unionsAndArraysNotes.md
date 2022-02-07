An example: we can represent time in TypeScript with a number or a string type.  If we had a list of dates in both types, we'd need an array that allows for string and number values

To create a union that supports multiple types for an arrays values, wrap the union in parenthesis ```(string | number)```, then use array notation ```[]```

``` typescript
const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string
 
const timesList: (string | number)[] = [dateNumber, dateString];
```

```timeList``` variable is typed to allow string and number types as values in it's array.  If we try to add a value to ```timeList``` that is not either type, TypeScript would display an error that boolean types are not allowed inside ```timeList```

Parentheses REALLY matter to type arrays - if we left out the parenthese and wrote ```string | number[]``` that type would allow strings or arrays of only numbers
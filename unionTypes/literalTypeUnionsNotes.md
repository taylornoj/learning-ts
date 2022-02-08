Literal type unions are useful when we want to create distinct states within a program

Example: if we were writing the code that controlled stoplights, we might write:

``` typescript
type Color = 'green' | 'yellow' | 'red';
 
function changeLight(color: Color) {
  // ...
}
```

This code means that whenever ```changeLight()``` is called, that it gets passed only allowed stoplight colors.  If we tried to call ```changeLight(purple)``` TypeScript would complain since that is not a valid color
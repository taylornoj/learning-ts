TypeScript has the ability to evaluate how our runtime code will perform, and then infer variable types for us

Type Narrowing:

``` typescript
function formatDate(date: string | number) {
  // date can be a number or string here
 
  if (typeof date === 'string') {
    // date must be a string here
  }
}
```

In this example, the ```date``` parameter has union type of ```string | number```.
 
Inside the body of the function, there is a conditional check to see if ```date``` is a string.  Then if the condition is met, then TypeSript can infer that ```date``` must be a string type within the conditional.  This allows us to call methods & properties that are allowed on string types.
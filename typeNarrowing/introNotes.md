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

***

# Review:

TypeScript can understand how our code will execute at runtime so that it can infer more specific types while we write code {{ type narrowing }}

Expression that checks if a variable is a specific type is called {{ type guard }}
- ```typeof``` is useful when writing type guards (checks if variable is string, number, boolean or symbol)

The ```in``` operator is usefule for checking if a specific property exists on an object
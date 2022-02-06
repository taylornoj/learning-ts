We can precisely control the kinds of functions assignable to a variable through using function types - specify the argument types and return type of a function.

Here is an example of a function type that is only compatible with functions that take in two string arguments and return a number:

``` typescript
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
```

Then, a variable of type ```StringsToNumberFunction``` can be assigned any compatible function:

``` typescript
let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.
```
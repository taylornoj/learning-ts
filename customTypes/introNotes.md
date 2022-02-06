TypeScript can also be used to create custom types

Tuples are an example of a custom type!
ex: the tuple type [string, string, number, boolean] is a custom type that can be used with data about a website's users (first name (string), last name (string), age (number) and whether they have a paid account (boolean))

The complex types covered here will be usable in the same ways as the simpler types converted here...they can be used as type annotations during variable declaration:

``` typescript
let myVar: compType;
```

and they can be used as type annotations for functions:

``` typescript
function testFn(param: compType): returnedCompType {
  /*Function body*/
}
```

You can even do type inference with complex types:

``` typescript
let inferredTypeVariable = testFn(myVar);
// The variable inferredTypeVariable will have the type returnedCompType. 
```

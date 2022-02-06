JavaScript arrays are flexible and can have elements of different types so with TypeScript, we can also define arrays with a fixed sequence of types:

``` typescript
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 
```
When an array is typed with elements of specific types, this is called a ```tuple```

Tuple types specify both the lengths and orders of compatible tuples:

``` typescript
let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 
```

We cannot assign an array to a tuple variable, even when the elements are of the correct type:

``` typescript
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple.
```


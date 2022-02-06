``` typescript
let examAnswers= [true, false, false];
```
The above does not necessarily tell us what the type of ```examAnswers``` is; even though we can deduce that it would be ```boolean[]```

With type ```boolean[]``` we can then expand the array:
``` typescript
examAnswers[3] = true; // No type error.

examAnswers= [true, false, false, true];

```

If we defined the array to be a tuple, we wouldn't be able to add additional boolean elements:

``` typescript
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type error! The tuple only has 3 elements.
```

However we get the same kind of type inference when we use the .concat() method.

Here, TypeScript infers the variable concatResult as an array of numbers, not a tuple:

``` typescript
let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6].
```

Type Inference returns arrays

When we want tuples, we need to use explicit type annotations
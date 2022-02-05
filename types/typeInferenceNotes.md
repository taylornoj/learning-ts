# Type Inference

When we declare a variable with an initial value
in TypeScript, the variable can never be reassigned
a value of a different data type

This is an example of TYPE INFERENCE
TypeScript expects the data type of the variable
to match the type of the value initially assigned
to it at declaration

TypeScript recognizes JavaScript's built-in
primitive data types:
- boolean
- number
- null
- string
- undefined

This will result in error:
```Type '1' is not assignable to type 'string'```
```
let order = 'first';
 
order = 1;
```

We can fix this complaint by changing the new
value to be the expected string type:
```
let order = 'first';
 
order = '1';
```
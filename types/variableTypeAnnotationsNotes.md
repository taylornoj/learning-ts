Sometimes we want to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type

If left as ```any``` TypeScript won't be able to protect us from accidentally assigning a variable to an incorrect type that could break the code

Type Annotations tell TypeScript what something is or will be 

Provide a type annotation like so:
``` typescript
let mustBeAString : string;
mustBeAString = 'Catdog';
 
mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
```


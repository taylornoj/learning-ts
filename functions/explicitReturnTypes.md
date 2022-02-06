You can add an explicit type annotation after closing parenthesis to be explicit about what type a function returns

Use the same syntax, a colon followed by the type

``` typescript
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
```

Can also explicitly state return types for arrow functions:

``` typescript
const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }
 
    return undefined;
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
```
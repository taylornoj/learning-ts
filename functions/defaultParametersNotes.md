If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value's type

The following will default to the name 'Anonymous' if no name is provided:
``` typescript
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}
```
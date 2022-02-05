The below will provide an error in TypeScript if we don't provide a value for all arguments in a function

So when the below is compiled to JavaScript, 'Hello, Anonymous!' will print correctly

``` typescript
function greet(name: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}
greet('Anders'); // Prints: Hello, Anders!
greet(); // TypeScript Error: Expected 1 arguments, but got 0.
```

To indicate that a parameter is intentionally options, we add a ```?``` after its name - telling TypeScript that a parameter is allowed to be ```undefined``` and doesn't always have to be provided

``` typescript
function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
 
greet(); // Prints: Hello, Anonymous!
```
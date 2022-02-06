It is preferred to use type annotations for functions, even when those functions don't return anything:

``` typescript
function logGreeting(name: string){
  console.log(`Hello, ${name}!`)
}
```

The function ```logGreeting()``` simply logs a greeting to the console - there is no returned value.  Therefore we must treat the return type as ```void```.

So we could write the function like this:
``` typescript
function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
```

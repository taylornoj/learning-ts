TypeScript can also type narrow without an else statement, provided that there is a return statement within the type guard

``` typescript
type Tea = {
  steep: () => string;
}
 
type Coffee = {
  pourOver: () => string;
} 
 
function brew(beverage: Coffee | Tea) {
  if ('steep' in beverage) {
    return beverage.steep();
  }
 
  return beverage.pourOver();
}
```

We immediately return ```beverage.steep()```.  Once we encounter a return statement, the function stops. Any code that was meant to work with a beverage of type Tea, will be executed and returned within the conditional. TypeScript then infers that the code following the conditional must be of type Coffee
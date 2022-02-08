The ```in``` operator checked if a property exists on an object itself or anywhere within its prototype chain

``` typescript
type Tennis = {
  serve: () => void;
}
 
type Soccer = {
  kick: () => void;
}
 
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}
```

In the above code, we check if the 'serve' property exists on ```sport```  with the in operator.  The serve property must exist inside the conditional, so TypeScript can narrow sports type inside the conditional to be of the type Tennis
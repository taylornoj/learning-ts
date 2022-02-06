Assigning types to rest parameters is similar to assigning types to arrays.

Here is a rest parameter without types:
``` javascript
function smush(firstString, ...otherStrings){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}
```

All arguements will be concatenated.

The rest parameter, ```otherStrings``` lets the function work with any number of parameters greater than zero.  However, the function is not type safe - 

The correctly typed rest parameter is:
``` typescript
function smush(firstString, ...otherStrings: string[]){
  /*rest of function*/
}
```

Now, TypeScript will treat ```otherStrings``` as an array of strings
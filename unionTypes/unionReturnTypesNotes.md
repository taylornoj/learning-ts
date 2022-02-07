TypeScript will look at the contents of a function and infer which types the function can return

If there are multiple possibly return types, TypeScript will infer the return type as a union

``` typescript
function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}
```

If the call is successful, the function will return a ```Book``` type describing a book

otherwise it will return a string

TypeScript infers the return type as the union ```Book | string``` and since TypeScript can infer the functions return type, there's no need to manually define it
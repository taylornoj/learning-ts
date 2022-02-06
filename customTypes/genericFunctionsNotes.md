We can also use generics to create collections of typed functions

Imagine we wanted to create a function that returns arrays filled with a certain value:

``` javascript
function getFilledArray(value, n) {
  return Array(n).fill(value);
}
```

Here, ```getFilledArray('cheese', 3)``` evaluates to ```['cheese', 'cheese', 'cheese']```.

We will run into a problem when we try to specify the functions return type.  We know it should be an array of whatever ```value```'s type is:

``` typescript
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
```

This tells TypeScript to make sure that ```value``` and the returned array have the same type ```T```.

```getFilledArray``` is the same as if we had written ```(value: string, n: number): string[]``` in its type annotation
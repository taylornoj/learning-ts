The TypeScript type annotation for array types is fairly straightforward: we put [] after the element type

Example where ```names``` is an array that can only contain strings:

``` typescript
let names: string[] = ['Danny', 'Samantha'];
```

Alternatively, you can use the syntax, ```Array<T>```:

``` typescript
let names: Array<string> = ['Danny', 'Samantha'];
```

And as expected, if you assign an array of numbers to a string variable...

``` typescript
let names: string[] = [1,2,3]; // Type Error!
```
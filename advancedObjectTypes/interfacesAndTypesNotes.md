We can define types in a variety of ways to fit our code - we've been using ```type``` keyword:

``` typescript
type Mail = {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...
```

You can also use ```interface```:

``` typescript
interface Mail {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...
```

Notice how ```interface``` does not require an = sign before the typed object. Functionally the two types in the examples are identical.

The biggest difference is that ```interface``` can only be used to type objects, while ```type``` can be used to type objects, primitives and more.

So why even use ```interface```?

Sometimes we don't want a type that can do everything. Using ```interface``` is a good match for writing object-oriented programs because these programs need many type objects
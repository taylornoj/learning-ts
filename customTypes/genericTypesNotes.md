TypeScript's generics are ways to create collections of types (and typed functions, etc) that share certain formal similarities

The array type syntax ```Array<T>``` is generic because we can substitute any type (pre-defined or custom) in the place of ```T```.

Generics give us the power to define our own collections of object types:

``` typescript
type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
```

This code defines a collection of object types with a different type for every value of ```T```

The generic ```Family<T>``` cannot actually be used as a type in a type annotation - we must substitute ```T``` with some type of our choosing, like a string.

Then, ```Family<string>``` is exactly the same as the object type given by setting ```T``` to string:

``` typescript
{parents: [string, string], mate: string, children: string[]}
```

``` typescript
let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 
```

Writing generic types with ```type typeName<T>``` allows us to use ```T``` within the type annotation as a type placeholder; when the generic type is used, ```T``` is replaced with the provided type
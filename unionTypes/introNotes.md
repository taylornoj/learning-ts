TypeScript lets us type variables with different levels of type specificity.

We can type a variable as a ```string``` - something specific. Or we can type a variable as ```any``` - unspecific.

Sometimes we need to strike a balance between extreme specificity and being totally unspecific with our types.  An example of needing something like this would be if we have to write a program that takes an employee ID, then print it to the console. BUT the ID could be a string or a number.

We could use ```any```

``` typescript
let ID: any;
 
console.log(`The ID is ${ID}.`);
```

but ```any``` might now work with our program.  To solve this problem, TypeScript allows us to be flexible and combine different types - a union

***

# Unions Review:

We can combine two types with a vertical bar |; this is the syntax for defining a union

Each type in a union is called a {{ type member }}

We can narrow down what methods and properties are available in a program with {{ type narrowing }}; allows us to type a variable as a union, then narrow down the union with a {{ type guard }} to call type member specific methods & properties

We can use unions to allow arrays to have multiple types of values


Sometimes TypeScript will not try to infer what type something is because a variable was declared without being assigned an initial value

TypeScript will then consider a variable to be of type ```any```

Variables of type ```any``` can be assigned to any value and TypeScript won't give an error if they are reassigned to a different type later on:

```
let onOrOff;
 
onOrOff = 1;
onOrOff = false;
```
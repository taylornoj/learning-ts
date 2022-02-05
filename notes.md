## TypeScript course on codecademy
***

### Getting Set Up:
- install TypeScript:
```
npm install --save-dev typescript
```
- ```npx tsc```
- create ```tsconfig.json``` file:
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```
- enter ```tsc -w -p .``` in secondary window to watch for changes

### The Basics:
- the type system refers to TypeScript's understanding of how your code is meant to function: mainly what data types should be stored under your variables

- TypeScript expects the data type of the variable to match the type of the value initially assigned to it as it's declaration {{ type inference }}

- Type annotations are little pieces of code that indicate what type a variable is meant to be; for example:
```
let youAreAwesome: boolean;
youAreAwesome = true;
```
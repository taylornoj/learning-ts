Object types allow us extremely fine level control over variable types - and they are the most common types

A type annotation for an object meant to represent a person:

``` typescript
let aPerson: {name: string, age: number};
```

It looks like an object literal, but instead of values after properties, we have types

```aPerson``` has yet to be assigned a value

``` typescript
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
aPerson = {name: 'User McCodecad', age: 22}; // Valid code. 
```

TypeScript places to restrictions on the types of an object's properties - they can be enums, arrays or other object types

``` typescript
let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};
```

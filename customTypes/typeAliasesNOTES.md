Type Aliases help customize the types in our programs.

We use the format 
``` typescript
type <alias name> = <type>;
```

Like so,
``` typescript
type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.
```

Type aliases are truly useful for referring to complicated types that need to be repeated, especially object types and tuple types.

Let's take a previous example:
``` typescript
let aCompany: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};
```
and get rid of some of that repetition...
``` typescript
type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};
```

TypeScript aliases are nothing more than names. They have no influence over how types work.

``` typescript
type MyString = string; 
type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.
```

The above code works because MyString and myOtherString are not distinct types - they are just alternative names for the same thing
When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share

``` typescript
const batteryStatus: boolean | number = false;
 
batteryStatus.toString(); // No TypeScript error
batteryStatus.toFixed(2); // TypeScript error
```

```batteryStatus``` can be a boolean or a number.  ```.toString()``` is a method on both but since only number has a ```.toFixed()``` method, TypeScript will complain if we try to call it

This rule also applies to type objects that we define:

``` typescript 
type Goose = { 
  isPettable: boolean; 
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
}
 
type Moose = {
  isPettable: boolean; 
  hasHoofs: boolean;
}
 
const pettingZooAnimal: Goose | Moose = { isPettable: true };
 
console.log(pettingZooAnimal.isPettable); // No TypeScript error
console.log(pettingZooAnimal.hasHoofs); // TypeScript error
```

```.isPettable``` is on Goose and Moose types.
```.hasHoofs``` is only a property on Moose so we can't call that method on pettingZooAnimal



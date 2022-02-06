We use enums when we'd like to enumerate all the possible values that a variable could have

There are many situations when we might want to limit the possible values of a variable.  For example:

``` typescript
enum Direction {
  North,
  South,
  East,
  West
}
```

The code above defined the enum ```Direction```, representing four compass directions.  Any other values like ```Direction.Southeast``` are not allowed.

``` typescript
let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 
```

Under the hood, TypeScript processes these kinds of enum types using ```numbers```. Enum values are assigned a numerical value according to their listed order.  The first value is 0 and the second is 1 and so on...

We can reassign variables:

```whichWayToArticOcean = Direction.North```
```whichWayToArticOcean == 0 ``` will evaluate to true.

But we can then reassign the variable to a number value:

```whichWayToArticOcean = 2``` 

We can also change the starting number, writing:

```typescript
enum Direction {
  North = 7,
  South,
  East,
  West
}
```

Then, ```Direction.North```, ```Direction.South```, ```Direction.East``` & ```Direction.West``` are equal to 7, 8, 9 and 10 respectively 

If we want to specify all numbers separately if needed, we can:

``` typescript
enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}
```


TypeScript also allows us to use enums based on strings; they are defined similarly:

``` typescript
enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
```

With numeric enums, the numbers could be assigned automatically, but with string enums, we must write the string explicitly

Numeric enums can lead to some bugs so it is better to use string enums
Sometimes it's convenient to copy all the type members from one type into another type.  We can accomplish this with ```extends```:

``` typescript
interface Shape {
  color: string;
}
 
interface Square extends Shape {
  sideLength: number;
}
 
const mySquare: Square = { sideLength: 10, color: 'blue' };
```

Square is using the extends keywork to copy all the type members from Shape to Square.
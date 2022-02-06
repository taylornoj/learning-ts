function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:

/*
Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray.

Write your code so that:

Each value should be an array of 6 elements.
All elements in stringArray should equal 'hi'.
All elements in numberArray should equal 9.
All elements in personArray should equal {name: 'J. Dean', age: 24}.
All elements in coordinateArray should equal [3,4].

*/

stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>(
  {name: 'J. Dean', age: 24}, 6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);
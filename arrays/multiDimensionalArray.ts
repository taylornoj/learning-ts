// Arrays:
let bestNumberss: number[] = [7,77,4];
let bestLunchess: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfastss: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleanss: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunchess, bestBreakfastss, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleanss, bestBooleanss];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumberss] ];

console.log(bestMealPlan);
/* [
  [ 'chicken soup', 'non-chicken soup' ],
  [ 'fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup' ],
  [ 'baked potato', 'mashed potato' ]
]
*/

console.log(bestBooleansTwice);
// [ [ true, false ], [ true, false ] ]

console.log(numbersMulti);
// [ [ [ 1 ], [ 2, 3 ] ], [ [ 7 ], [ 7, 77, 4 ] ] ]
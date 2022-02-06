/**
 * Returns list of salad ingredients
 * 
 * @param fruit1 - the first fruit input
 * @param fruit2 - the second fruit input
 * @returns the salad
 */

 function makeAnotherFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}

makeAnotherFruitSalad("spinach", "tomato")
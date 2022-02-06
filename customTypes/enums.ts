let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

/*
Create an enum named Pet:
*/

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

/*
Create a type safe variable petOnSaleTS and assign
it to the value Pet.Chinchilla
*/

let petOnSaleTS: Pet = Pet.Chinchilla;

/*
Create the type safe version of ordersArray
Then add the appropriate type annotation
{{ [<a type>, <another type>][] }}
*/

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

// ordersArrayTS.push([Pet.Jerboa, 3]); will not
// run because jerboas do not exist on type typeof 'Pet'
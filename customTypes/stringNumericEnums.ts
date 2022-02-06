let petOnSaleTwo = 'chinchilla';
let ordersArrayTwo = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

/*
create a string enum named Pet
*/

enum Pet {
  HamsterA = 'HAMSTER',
  RatA = 'RAT',
  ChinchillaA = 'CHINCHILLA',
  TarantulaA = 'TARANTULA'
}

/*
create the type safe variable and assign it to
the value Pet.ChinchillaA
*/

let petOnSaleTSS: Pet = Pet.ChinchillaA;

/*
create the type safe version of ordersArrayTwo
where pet names are replaced by corresponding enum
values
*/

let ordersArrayTSS = [
  [Pet.RatA, 2], 
  [Pet.ChinchillaA, 1], 
  [Pet.HamsterA, 2], 
  [Pet.ChinchillaA, 50]
];

// ordersArrayTSS.push(['HAMSTER', 1]);
// Type '"HAMSTER"' is not assignable to type 'number | Pet'.
// Pet.Hamster must be used instead
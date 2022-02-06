function addPower(p: number, ...numsToAdd: number[]): number{
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}
console.log(addPower(2, 3, 4)) // prints 25

/*

code explanation: the function adds up the pth powers of all 
subsequent arguments; so addPower(2, 3, 4) returns 25 since 3
squared plus 4 squared is 25

*/

// addPower('a string', 4, 5, 6) will result in error
// because there is no such thing as a number to the power
// of a string
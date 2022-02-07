type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

/*
Declare a variable named userData that stores the 
returned value of createUser(). Then, go back and 
provide userData with the correct union type.
*/

let userData: User | string = createUser();
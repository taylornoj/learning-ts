/*
Add the members from Human to the Developer 
interface using the extends keyword.
*/
interface Developer extends HumanTwo {
  code: () => void;
}

/*
Declare an interface named Human, and 
give it two type members: name typed 
as a string and hobbies typed as string[].
*/
// Add your interface here
interface HumanTwo {
  name: string;
  hobbies: string[];
}


const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();
// Headphones on. Coffee brewed. Editor open.
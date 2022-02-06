/*

We have defined the tuple dogTup in the code editor. 
Your challenge is to define a variable myArr of the 
type string[].

*/

// Don't change this part:
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

// Your code goes here:

let myArr = dogTup.concat([]);

/*

Now demonstrate that myArr is an array rather than 
a tuple by adding the code myArr[50] = 'not a dog' 
and running tsc. If myArr were a tuple, accessing 
element 50 would be impossible!

*/

myArr[50] = 'not a dog';
/*
Let’s write a program that will use 
literal types and unions to display 
the states of a download button.

Start by writing a type named Status. 
It should be equal to the union of three 
literal types: 'idle', 'downloading', and 
'complete'.
*/

type Status = 'idle' | 'downloading' | 'complete';

/*
Next, write a function named downloadStatus(). 
It should have one parameter named status, 
which should be typed as the Status type you 
wrote in the previous step.

Inside the downloadStatus() function’s body, 
write three conditionals that output different 
messages based on status.
*/

function downloadStatus(status: Status) {
  if(status === 'idle') {
    console.log('Download')
  }
  if(status === 'downloading') {
    console.log('Downloading...')
  }
  if(status === 'complete'){
    console.log('Your download is complete!')
  }
}

console.log(downloadStatus('idle'));
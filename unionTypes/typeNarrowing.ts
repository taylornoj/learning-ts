function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === 'string') {
    console.log(value.toLowerCase())
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }

}

formatValue('Hiya');
formatValue(42);

// if lines 6-8 aren't present and we ran this in the console,
// only 'Hiya' would print
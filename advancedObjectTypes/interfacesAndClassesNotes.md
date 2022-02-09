The ```interface``` keywork in TypeScript is especially good for adding types to a class

Since ```interface``` is constrained to typed objects and using class is a way to program with objects - this means that interface and class are a good match

TypeScript gives us the ability to apply a type to an object/class with the implements keyword, like this:

``` typescript
interface Robot {
  identify: (id: number) => void;
}
 
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }
 
  answerQuestion() {
    console.log('42!');
  }
}
```
Note the ```identify()``` method; since Robot is applied to OneSeries, OneSeries must include a method named ```.identify()``` that matches the Robot interface.

And then OneSeries can have methods and properties of its own (like ```answerQuestion```)

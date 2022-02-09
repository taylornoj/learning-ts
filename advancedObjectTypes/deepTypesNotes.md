Deep Types = nested methods and properties

``` typescript
class OneSeries implements Robot {
  about;
 
  constructor(props: { general: { id: number; name: string; } }) {
    this.about = props;
  }
 
  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}
```

In the above class, ```OneSeries``` expects to have an 'about' property that is an object with a nested object inside

To write that:

``` typescript
interface Robot {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}
```
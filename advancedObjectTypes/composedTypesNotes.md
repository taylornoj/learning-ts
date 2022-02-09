As our data gets nested deeper, we'll start to have typed objects that become unwieldy to write and read

To solve this, TypeScript allows us to compose types.  We can define multiple types and reference them inside other types

We will go from this:

``` typescript
interface About {
  general: {
    id: number;
    name: string;
    version: {
      versionNumber: number;
    }
  }
}
```

To this:


``` typeScript
interface About {
  general: General;
}
 
interface General {
  id: number;
  name: string;
  version: Version;
}
 
interface Version {
  versionNumber: number;
}
```
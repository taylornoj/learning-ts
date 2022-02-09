Sometimes we don't know the property names for an object (like when we get back information from an outside data source/API).  WE might know what the data will look like in general so we can write an object type that allows us to include a variable name for the property name. This is called {{ index signatures }}

Lets say we have this data from a map API for locations of solar eclipses:

``` typescript
{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}
```

We know property names will be strings, and values will be booleans - but still don't know property names.

But we can still utilize an index signature to type this object:

``` typescript
interface SolarEclipse {
  [latitude: string]: boolean;
} 
```

```latitude``` is purely for us, the developer as a human readable name that will show up in potential error messages later
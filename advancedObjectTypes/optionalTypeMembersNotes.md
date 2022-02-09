We can have functions or classes that take in many arguments, some which are required and some are optional.  TypeScript does allow us to make some type members optional:

``` typescript

interface OptionsType {
  name: string;
  size?: string;
}
 
function listFile(options: OptionsType) {
  let fileName = options.name;
 
  if (options.size) {
    fileName = `${fileName}: ${options.size}`;
  }
 
  return fileName;
}
```

```OptionsType``` has an optional type member named ```size```.  

So we could call:

``` typescript
listFile({ name: 'readme.txt' })
```

and not break code
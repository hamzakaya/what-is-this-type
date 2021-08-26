## Overview
`what-is-this-type` - a bunch of functions to make various checks

## Installation
To install the stable version:

```
npm install --save what-is-this-type
```

## Documentation

#### isEqual(objectA: any, objectB: any, options: IsEqualOptions)
Checks if the `objectA` shallowly or deeply equal `objectB`;
- `objectA, objectB` - any mergeable object
- `IsEqualOptions` - object with following properties:
    - `deep?: boolean` - make deep check
    - `symbol?: boolean` - check symbols properties either
    - `skipKeys?: string[]` - keys to skip check
    - `deepKeys?: string[]` - keys for deep check (only actual when `deep` is false)

#### isNull(value: any)
Checks if the `value` is strictly null

#### isUndefined(value: any)
Checks if the `value` is strictly undefined

#### isBool(value: any)
Checks if the `value` is boolean

#### isNumber(value: any)
Checks if the `value` is number

#### isInteger(value: any)
Checks if the `value` is integer

#### isString(value: any)
Checks if the `value` is string

#### isMergeable(value: any)
Checks if the `value` is mergeable

#### isObject(value: any)
Checks if the `value` is object and not array

#### isEmpty(value: any)
Checks if the `value` is mergeable and has no own properties

#### isSimpleObject(value: any)
Checks if the `value` is object, not array and has no consturctor (i.e. constructor === Object)

#### isArray(value: any)
Checks if the `value` is array

#### isFunction(value: any)
Checks if the `value` is function

#### isPromise(value: any)
Checks if the `value` is promise

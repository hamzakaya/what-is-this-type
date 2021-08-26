const isNull = (value: any): value is null => value === null;
const isUndefined = (value: any): value is undefined => typeof value === 'undefined';
const isNumber = (value: any): value is number => typeof value === "number";
const isInteger = (value: any) => typeof value === "number" && (Math.floor(value) === value || value > 9007199254740992 || value < -9007199254740992);
const isString = (value: any): value is string => typeof value === 'string';
const isBool = (value: any): value is boolean => value === false || value === true;

const isEmpty = (value: any): value is any => isMergeable(value) && Object.keys(value).length === 0;
const isObject = (value: any): value is any => isMergeable(value) && !isArray(value);
const isArray = Array.isArray;
const isFunction = (value: any): value is Function => typeof value === 'function';
const isPromise = (value: any): value is Promise<any> => isFunction(value?.then);
const isPlainObject = (value: any): value is any => isObject(value) && value.constructor === Object

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
  ? (obj: any) => typeof obj
  : (obj: any) => obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;

function isMergeable(val: any) {
  const nonNullObject = val && typeof val === 'object';
  return nonNullObject
    && Object.prototype.toString.call(val) !== '[object RegExp]'
    && Object.prototype.toString.call(val) !== '[object Date]'
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function is(x: any, y: any) {
  // SameValue algorithm
  if (x === y) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

interface IsEqualOptions {
  deep?: boolean;
  symbol?: boolean;
  skipKeys?: string[];
  deepKeys?: string[];
}

function isEqual(objA: any, objB: any, options: IsEqualOptions = {}) {
  if (is(objA, objB)) return true;

  if ((isUndefined(objA) ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (isUndefined(objB) ? 'undefined' : _typeof(objB)) !== 'object' || objB === null)
    return false;
  const fn = options.symbol ? (obj: any): any[] => (Object.keys(obj) as any[]).concat(Object.getOwnPropertySymbols(obj)) : Object.keys;
  const keysA = fn(objA);
  const keysB = fn(objB);

  if (keysA.length !== keysB.length) return false;

  const {skipKeys = [], deepKeys = []} = options;
  for (let i = 0; i < keysA.length; i++) {
    if (~skipKeys.indexOf(keysA[i])) continue;     // if key is an skip key, skip comparison

    if (options.deep || ~deepKeys.indexOf(keysA[i])) {
      const result = isEqual(objA[keysA[i]], objB[keysA[i]], options);
      if (!result) return false;
    } else if (!objB.hasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}


export {is, isEqual, isMergeable, isBool, isNull, isUndefined, isNumber, isInteger, isString, isObject, isPlainObject, isArray, isEmpty, isFunction, isPromise}; // what-is-this-type

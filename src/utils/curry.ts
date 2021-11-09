/* eslint-disable @typescript-eslint/ban-types */
export function curry(func: Function) {
  return function curried(this: unknown, ...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (this: unknown, ...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

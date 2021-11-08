/* eslint-disable @typescript-eslint/ban-types */
function curry(func: Function) {
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
type IsType =
  | "String"
  | "Boolean"
  | "Number"
  | "Undefined"
  | "Null"
  | "Object"
  | "Array";
const typeList: IsType[] = [
  "String",
  "Boolean",
  "Number",
  "Undefined",
  "Null",
  "Object",
  "Array",
];
const is: Record<string, Function> = {};
typeList.forEach((item) => {
  is[item] = curry(isType)(item);
});

function isType(type: string, value: unknown): boolean {
  return toString.call(value).slice(8, -1) === type;
}
// todo: TS待优化,最好不用断言,is用静态类去写,并且去掉Function

export { is };

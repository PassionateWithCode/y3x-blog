/* eslint-disable @typescript-eslint/ban-types */
import { curry } from "./index";

const typeList = [
  "String",
  "Boolean",
  "Number",
  "Undefined",
  "Null",
  "Object",
  "Array",
] as const;

type UnionType = typeof typeList[number];

type Is = {
  [K in UnionType]: Function;
};

const is = typeList.reduce((p, c) => {
  p[c] = curry(isType)(c);
  return p;
}, {} as Is);

function isType(type: string, value: unknown): boolean {
  return toString.call(value).slice(8, -1) === type;
}
// todo: TS待优化,is用静态类去写,并且去掉Function

export { is };

export type ResultTemplate<T = UnknownObj> = {
  msg: string;
  code: 0 | 1;
  data: T;
};
export type PromiseReturnType<T> = (res: ResultTemplate<T>) => void;

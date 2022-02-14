type Recordable<T = any> = Record<string, T>;

type UnknownObj = Recordable<unknown>;

// !报错的原因是因为cypress这个库里面也有这个,待解决
// type Nullable<T> = T | null
type Recordable<T = any> = Record<string, T>

type UnknownObj = Recordable<unknown>

// todo 报错的原因是因为cypress这个库里面也有这个,待解决
// type Nullable<T> = T | null

// 获取Promise<value>里面的value的值
type GetPromiseRes<T extends Promise<any>> = T extends Promise<infer Type> ? Type : never

// 获取数组的第一项
type GetFirst<T extends Array<any>> = T extends [infer Type, ...Array<unknown>] ? Type : never

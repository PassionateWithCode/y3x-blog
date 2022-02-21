declare global {
	type Recordable<T> = Record<string, T>

	type UnknownObj = Recordable<unknown>

	// todo 报错的原因是因为cypress这个库里面也有这个,待解决
	// type Nullable<T> = T | null

	// 获取Promise<value>里面的value的值
	type GetPromiseRes<T extends Promise<unknown>> = T extends Promise<infer Type> ? Type : never

	// 获取数组的第一项
	type GetFirst<T extends Array<unknown>> = T extends [infer First, ...Array<unknown>]
		? First
		: never

	// 获取数组的最后一项
	type GeLast<T extends Array<unknown>> = T extends [...Array<unknown>, infer Last] ? Last : never

	// 数组pop()剩下的
	type PopArr<T extends Array<unknown>> = T extends [...infer Rest, unknown] ? Rest : never

	// 数组shift()之后剩下的
	type ShiftArr<T extends Array<unknown>> = T extends []
		? []
		: T extends [unknown, ...infer Rest]
		? Rest
		: never
}

export {}

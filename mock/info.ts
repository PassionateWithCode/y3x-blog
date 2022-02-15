import { MockMethod } from 'vite-plugin-mock'
function useReturn(data: Recordable<unknown> | Array<unknown>, code: 0 | 1 = 1, msg = '') {
	return {
		code,
		data,
		msg,
	}
}
export default [
	{
		url: '/api/menu',
		method: 'get',
		response: () => {
			return useReturn([
				{
					title: '首页',
					path: '/',
				},
				{
					title: '分类',
					path: '/',
				},
				{
					title: '标签',
					path: '/',
				},
				{
					title: '作者',
					path: '/',
				},
				{
					title: '时间线',
					path: '/',
				},
				{
					title: '测试页面',
					path: '/',
				},
			])
		},
	},
	{
		url: '/api/login',
		method: 'post',
		response: () => {
			return {
				code: 0,
				data: {
					name: 'vben',
				},
			}
		},
	},
	{
		url: '/api/post',
		method: 'post',
		timeout: 2000,
		response: {
			code: 0,
			data: {
				name: 'vben',
			},
		},
	},
	{
		url: '/api/getArticleList',
		method: 'get',
		timeout: 1000,
		response: () =>
			useReturn([
				{
					createTime: 1644856895588,
					author: '五毛',
					view_count: 21,
					like_count: 10,
					title: '风电大基地卷土重来，弃风限电大概率重演',
					des: '曾因较高弃风率而被限制新增风电的三北（西北、东北、华北）地区，正在迎来新一轮风电大基地建设高潮。 三北地区拥有中国80%的风电资源，十年前就涌现出了多个风电大基地，',
					head_img:
						'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082616501867.jpg',
					tag: ['前沿科技'],
				},
				{
					createTime: 1644856895588,
					author: '五毛',
					view_count: 21,
					like_count: 10,
					title: '风电大基地卷土重来，弃风限电大概率重演',
					des: '曾因较高弃风率而被限制新增风电的三北（西北、东北、华北）地区，正在迎来新一轮风电大基地建设高潮。 三北地区拥有中国80%的风电资源，十年前就涌现出了多个风电大基地，',
					head_img:
						'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082616501867.jpg',
					tag: ['前沿科技'],
				},
				{
					createTime: 1644856895588,
					author: '五毛',
					view_count: 21,
					like_count: 10,
					title: '风电大基地卷土重来，弃风限电大概率重演',
					des: '曾因较高弃风率而被限制新增风电的三北（西北、东北、华北）地区，正在迎来新一轮风电大基地建设高潮。 三北地区拥有中国80%的风电资源，十年前就涌现出了多个风电大基地，',
					head_img:
						'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082616501867.jpg',
					tag: ['前沿科技'],
				},
			]),
	},
	{
		url: '/api/text',
		method: 'post',
		rawResponse: async (req, res) => {
			let reqbody = ''
			await new Promise(resolve => {
				req.on('data', chunk => {
					reqbody += chunk
				})
				req.on('end', () => resolve(undefined))
			})
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 200
			res.end(`hello, ${reqbody}`)
		},
	},
] as MockMethod[]

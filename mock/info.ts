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
		response: () =>
			useReturn([
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
			]),
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
		timeout: 10,
		response: () =>
			useReturn({
				list: [
					{
						createTime: 1644856895588,
						id: '2121',
						author: {
							id: 12312,
							name: 'wumao',
						},
						view_count: 21,
						like_count: 10,
						title: '风电大基地卷土重来，弃风限电大概率重演',
						des: '曾因较高弃风率而被限制新增风电的三北（西北、东北、华北）地区，正在迎来新一轮风电大基地建设高潮。 三北地区拥有中国80%的风电资源，十年前就涌现出了多个风电大基地，',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335112-768x512.jpg',
					},
					{
						createTime: 1644856895588,
						id: '2121123',
						author: {
							id: 12312,
							name: 'wumao',
						},
						view_count: 100,
						like_count: 12,
						title: 'Windows 10X延期发布，微软这次做系统能学乖吗？',
						des: '根据Windows Central的报道，Windows 10X操纵系统以及第三方OEM设备在今年已经无望问世。',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016322256-scaled.jpg',
					},
					{
						createTime: 1644851895518,
						author: {
							id: 122312,
							name: 'wumao',
						},
						view_count: 20,
						like_count: 112,
						id: '1231212',
						title: '掘金视频号：有人已经吃到第一波红利',
						des: '与微博高调推出视频号，10亿广告5亿现金分成重金打造不同，微信视频号从一月内测到逐步放开，再到日活超2亿，版本升级，一切都在悄然进行，甚至在7月份举行的2次视频号闭门会议都是秘密进行的',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335112-768x512.jpg',
					},
					{
						createTime: 1644816895588,
						author: {
							id: 122312,
							name: 'wumao',
						},
						id: '2132121',
						view_count: 21,
						like_count: 10,
						title: 'YY投资Shopline，试水跨境电商',
						des: '8月5日，据志象网（The Passage）获悉，欢聚时代（NASDAQ：YY）战略投资了总部位于中国香港的跨境电商平台Shopline，这是该公司投资的首家跨境电商公司。',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335830-scaled.jpg',
					},
					{
						createTime: 16448126895588,
						author: {
							id: 122312,
							name: 'wumao',
						},
						id: '2132121',
						view_count: 21,
						like_count: 10,
						title: 'YY投资Shopline，试水跨境电商',
						des: '8月5日，据志象网（The Passage）获悉，欢聚时代（NASDAQ：YY）战略投资了总部位于中国香港的跨境电商平台Shopline，这是该公司投资的首家跨境电商公司。',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335830-scaled.jpg',
					},
					{
						createTime: 164432816895588,
						author: {
							id: 122312,
							name: 'wumao',
						},
						id: '2132121',
						view_count: 21,
						like_count: 10,
						title: 'YY投资Shopline，试水跨境电商',
						des: '8月5日，据志象网（The Passage）获悉，欢聚时代（NASDAQ：YY）战略投资了总部位于中国香港的跨境电商平台Shopline，这是该公司投资的首家跨境电商公司。',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335830-scaled.jpg',
					},
					{
						createTime: 164324816895588,
						author: {
							id: 122312,
							name: 'wumao',
						},
						id: '2132121',
						view_count: 21,
						like_count: 10,
						title: 'YY投资Shopline，试水跨境电商',
						des: '8月5日，据志象网（The Passage）获悉，欢聚时代（NASDAQ：YY）战略投资了总部位于中国香港的跨境电商平台Shopline，这是该公司投资的首家跨境电商公司。',
						head_img:
							'https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/12/2020122016335830-scaled.jpg',
					},
				],
				pageInfo: {
					pageSize: 10,
					pageIndex: 1,
					total: 1001,
				},
			}),
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

import { MockMethod } from 'vite-plugin-mock'
function useReturn(data: Recordable<unknown> | Array<unknown>, code: 0 | 1 = 1, msg = "") {
  return {
    code, data, msg
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
          path: '/'
        },
        {
          title: '分类',
          path: '/'
        },
        {
          title: '标签',
          path: '/'
        },
        {
          title: '作者',
          path: '/'
        },
        {
          title: '时间线',
          path: '/'
        },
        {
          title: '测试页面',
          path: '/'
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
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
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

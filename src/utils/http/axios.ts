import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import { axiosConfig, ContentTypeEnum } from './config'

const api = axios.create({
  baseURL: axiosConfig.BASE_URL,
  timeout: 10 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
})

api.interceptors.response.use(successFn, errorFm)

function successFn(response: AxiosResponse): AxiosResponse {
  return response
}
function errorFm(error: AxiosError): Promise<Record<string, unknown>> {
  const res = error.response
  if (res !== undefined) {
    switch (res.status) {
      // todo 封装统一的提示
      case 400:
        console.log("xxx");
        break
    }
  }
  return Promise.reject(error)
}

export default api
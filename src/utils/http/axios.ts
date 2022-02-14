/*
 * @Author: wumao
 * @Date: 2021-11-05 17:04:56
 * @LastEditors: wumao
 * @LastEditTime: 2021-12-29 15:19:02
 * @Description: file content
 */
import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
import { axiosConfig, ContentTypeEnum } from "./config";

const http = axios.create({
  baseURL: axiosConfig.BASE_URL,
  timeout: 10 * 1000,
  headers: { "Content-Type": ContentTypeEnum.JSON },
});

http.interceptors.response.use(successFn, errorFm);

function successFn(response: AxiosResponse): AxiosResponse {
  // 这里最好还是不要返回.data这种
  return response;
}
function errorFm(error: AxiosError): Promise<Record<string, unknown>> {
  const res = error.response;
  if (res !== undefined) {
    switch (res.status) {
      // todo 封装统一的提示
      case 400:
        console.log("xxx");
        break;
    }
  }
  return Promise.reject(error);
}

export default http;

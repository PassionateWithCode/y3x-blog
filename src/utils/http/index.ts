import http from "./axios";
import type { AxiosResponse } from "axios";
import type { ResultTemplate, PromiseReturnType } from "./types";

// 便于导入类型
export * from "./types";

export const get = <T = UnknownObj>(
  url: string,
  params?: UnknownObj
): Promise<ResultTemplate<T>> =>
  new Promise((resolve, reject) => {
    http
      .get(url, {
        params,
      })
      .then((response: AxiosResponse) => {
        notifyUser<T>(response, resolve, reject);
      })
      .catch((error: UnknownObj) => {
        reject(error);
      });
  });

export const post = <T = UnknownObj>(
  url: string,
  data: UnknownObj
): Promise<ResultTemplate<T>> =>
  new Promise((resolve, reject) => {
    http
      .post(url, data)
      .then((response: AxiosResponse) => {
        notifyUser<T>(response, resolve, reject);
      })
      .catch((error: UnknownObj) => {
        reject(error);
      });
  });

function notifyUser<T = UnknownObj>(
  response: AxiosResponse<ResultTemplate<T>>,
  resolve: PromiseReturnType<T>,
  reject: PromiseReturnType<T>
) {
  if (response.data.code === 1) {
    resolve(response.data);
  } else {
    reject(response.data);
    // const { msg, obj } = response.data
    // TODO 封装一个统一的错误提示
  }
}

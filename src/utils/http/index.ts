import http from "./axios";
import type { AxiosResponse } from "axios";

export type UnknownObj = Recordable<unknown>;
export type ResultTemplate<T = UnknownObj> = {
  msg: string;
  code: 0 | 1;
  data: T;
};
export type PromiseReturnType<T> = (res: ResultTemplate<T>) => void;

export const getData = <T = UnknownObj>(
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

export const postData = <T = UnknownObj>(
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

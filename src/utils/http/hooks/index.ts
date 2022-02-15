import type { ResultTemplate } from "../types";
import { ref } from "vue";

type ApiPromiseType = (params: any) => Promise<ResultTemplate<any>>;

export async function useRequest(apiPromise: ApiPromiseType, params: object) {
  const { data } = await apiPromise(params);
  return {
    data: ref(data),
  };
}

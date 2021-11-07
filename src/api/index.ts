import { getData } from "@/utils/http";
export function getMenuData<T = unknown>() {
  return getData<T>("/api/menu");
}

import { getData } from "@/utils";
export function getMenuData<T = unknown>() {
  return getData<T>("/api/menu");
}

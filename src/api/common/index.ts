import { get } from "@/utils";
import { Menu } from "./types";
export * from "./types";

/**
 * 获取menu参数
 */
export function getMenuData() {
  return get<Menu>("/api/menu");
}

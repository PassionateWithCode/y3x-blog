import { get } from "@/utils";
import { Menu } from "./types";
export * from "./types";

export function getMenuData() {
  return get<Menu>("/api/menu");
}

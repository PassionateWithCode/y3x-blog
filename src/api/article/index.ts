import { get } from "@/utils";
import type { ArticleList } from "./model";

export function getArticleList() {
  return get<ArticleList>("/api/getArticleList");
}

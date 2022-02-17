import { get } from "@/utils";
import type { ArticlesRes, ArticleListParams } from "./model";
export * from "./model";

/**
 * 获取文章列表
 * @param {Object} pageSize - 每页的页数
 * @param {Object} pageIndex - 页码
 * @param {Object} tag - 标签ID
 */
export function getArticleList(params: ArticleListParams) {
  return get<ArticlesRes>("/api/getArticleList", params);
}

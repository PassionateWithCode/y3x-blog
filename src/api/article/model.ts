import type { TagDetail, Pagination } from "../model";

export interface ArticleListParams extends Pagination {
  categoryId?: string;
}

export type ArticleDetail = {
  createTime: number;
  author: {
    id: string;
    name: string;
  };
  view_count: number;
  like_count: number;
  id: string;
  title: number;
  des: number;
  head_img: string;
  tag?: TagDetail[];
  content?: string;
};

import type { TagDetail, Pagination } from "../model";

export interface ArticleListParams extends Omit<Pagination, "total"> {
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
  title: string;
  des: string;
  head_img: string;
  tag?: TagDetail[];
  content: string;
};

export type ArticlesRes = {
  list: ArticleDetail[];
  pageInfo: Pagination;
};

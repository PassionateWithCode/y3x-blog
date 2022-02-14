import type { TagDetail } from "../model";

export type ArticleDetail = {
  createTime: number;
  author: string;
  view_count: number;
  like_count: number;
  title: number;
  des: number;
  head_img?: string;
  tag?: TagDetail[];
  content?: string;
};

export type ArticleList = ArticleDetail[];

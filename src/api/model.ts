export interface TagDetail {
  createTime: number;
  desc: string;
  title: string;
  id: number;
}

export interface Pagination {
  pageSize: number;
  pageIndex: number;
  total: number;
}

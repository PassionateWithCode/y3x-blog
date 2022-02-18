import { reactive, ref } from "vue";
import { getArticleList } from "@/api/article/index";
import type { ArticleDetail } from "@/api/article/index";

import type { CarouselData } from "@/components/Base/Banner/index.vue";
import type { Pagination } from "@/api/model";

const pageInfoParams = reactive({
  pageSize: 10,
  pageIndex: 1,
});
const pageInfo = reactive<Pagination>({
  pageSize: 10,
  pageIndex: 1,
  total: 0,
});
const articleList = ref<ArticleDetail[]>([]);
const articleWall = ref<CarouselData[]>([]);

async function refresh() {
  const {
    data: { list, pageInfo: pageInfoRes },
  } = await getArticleList({ categoryId: "xxx", ...pageInfoParams });
  if (!articleList.value.length) {
    articleList.value = list;
    genArticleWall(articleList.value);
  } else {
    articleList.value.push(...list);
  }
  Object.assign(pageInfo, pageInfoRes);
}

// 下一页
const nextPage = async () => {
  pageInfo.pageIndex++;
  await refresh();
};

// 生成banner大图
function genArticleWall(params: ArticleDetail[]) {
  articleWall.value = params.reduce((p, c) => {
    const newItem = {
      articleId: c.id,
      authorInfo: c.author,
      headImg: c.head_img,
      title: c.title,
    };
    return [...p, newItem];
  }, [] as CarouselData[]);
}

function resetPage() {
  // 重置页面
}

export { refresh, nextPage, articleWall, articleList, resetPage };

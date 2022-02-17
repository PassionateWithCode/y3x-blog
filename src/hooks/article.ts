import { ref, reactive } from "vue";
import type { ArticleDetail } from "@/api/article/index";
import type { CarouselData } from "@/components/Base/Banner/index.vue";
import { getArticleList } from "@/api/article/index";
import type { Pagination } from "@/api/model";

/**
 * 通过文章列表生成banner
 * @param {ArticleDetail[]} param - 文章列表页数据
 */
export function useGenerateBanner(articleList: ArticleDetail[]) {
  const articleWall = ref<CarouselData[]>([]);
  genArticleWall(articleList);
  return [articleWall];

  // ?utils
  /**
   * 处理banner头部数据
   * @param {ArticleDetail[]} param - 文章详情列表
   */
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
}

/**
 * 获取对应分类下的文章
 * @param {string|undefined} param - 分类ID
 */
export async function usePullArticle(categoryId?: string) {
  const pageInfoParams: Omit<Pagination, "total"> = {
    pageSize: 10,
    pageIndex: 1,
  };
  const pageInfo = reactive<Pagination>({
    pageSize: 10,
    pageIndex: 1,
    total: 0,
  });

  const articleList = ref<ArticleDetail[]>([]);

  async function pullData() {
    const {
      data: { list, pageInfo: pageInfoRes },
    } = await getArticleList({ categoryId, ...pageInfoParams });
    if (!articleList.value.length) {
      articleList.value = list;
    } else {
      articleList.value.push(...list);
    }
    Object.assign(pageInfo, pageInfoRes);
  }
  // start
  await pullData();

  const nextPage = async () => {
    pageInfo.pageIndex++;
    await pullData();
  };

  return {
    articleList,
    pageInfo,
    nextPage,
  };
}

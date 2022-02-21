import { createRouter, createWebHistory } from "vue-router";

import BlogLayout from "@/layout/blog/index.vue";
import Home from "@/pages/Home/index.vue";
import Home1 from "@/pages/Home/index1.vue";
import Home2 from "@/pages/Home/index2.vue";

const routes = [
  {
    path: "/",
    component: BlogLayout,
    meta: {
      title: "y3x blog",
    },
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        // 错误示例1
        path: "/1",
        component: Home1,
      },
      {
        // 错误示例2
        path: "/2",
        component: Home2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

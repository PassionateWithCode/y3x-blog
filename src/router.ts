import { createRouter, createWebHistory } from "vue-router";

import BlogLayout from "@/layout/blog/index.vue";
import Home from "@/pages/Home/index.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

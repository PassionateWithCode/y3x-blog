import { createRouter, createWebHistory } from "vue-router";

import BlogLayout from "@/layout/blog/index.vue";

const routes = [
  {
    path: "/",
    component: BlogLayout,
    meta: {
      title: "y3x blog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

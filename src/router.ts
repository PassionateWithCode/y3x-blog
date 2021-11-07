import { createRouter, createWebHistory } from "vue-router";

import Index from "@/layout/blog/index.vue";

const routes = [
  {
    path: "/",
    component: Index,
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

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Members",
    component: () => import("../views/Members.vue"),
  },
  {
    path: "/:id",
    name: "MemberDetail",
    component: () => import("../views/MemberDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

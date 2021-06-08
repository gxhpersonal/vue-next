import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Home = () => import("../src/components/Home/Index.vue");
const Detail = () => import("../src/components/Detail/Index.vue");
const notFound = () => import("../src/components/notFound.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页"
    },
    component: Home
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {
      title: "详情页"
    },
    component: Detail
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    meta: { title: "404" },
    component: notFound
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
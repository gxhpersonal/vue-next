import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Home = () => import("../src/components/Home/Index.vue");
const Detail = () => import("../src/components/Detail/Index.vue");
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
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
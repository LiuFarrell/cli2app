import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/Home");
const Hot = () => import("../views/hot/Hot");
const Activity = () => import("../views/activity/Activity");
const Notice = () => import("../views/notice/Notice");
const Mine = () => import("../views/mine/Mine");

Vue.use(VueRouter);
//创建路由对象
const routes = [
  {
    path: "",
    redirect: "/home"
  },

  {
    path: "/home",
    component: Home
  },
  {
    path: "/hot",
    component: Hot
  },
  {
    path: "/activity",
    component: Activity
  },
  {
    path: "/notice",
    component: Notice
  },
  {
    path: "/mine",
    component: Mine
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//导出
export default router;

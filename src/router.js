import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

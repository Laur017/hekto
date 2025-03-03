import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/HomePage.vue";
import Products from "./pages/home/ProductsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/products", component: Products },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

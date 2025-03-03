import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/HomePage.vue";
import Products from "./pages/home/ProductsPage.vue";
import ProductDetails from "./pages/details/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/products", component: Products },
    { path: "/products/:id", component: ProductDetails },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

import { createStore } from "vuex";
import activePageModule from "./modules/ActivePage/index";
import Products from "./modules/Products/index";
import Filters from "./modules/Filters/index";
import ProdFilters from "./modules/ProdFilters/index";
import Cart from "./modules/Cart/index";

export default createStore({
  modules: { activePageModule, Products, Filters, ProdFilters, Cart },
});

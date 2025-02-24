import { createStore } from "vuex";
import activePageModule from "./modules/ActivePage/index";
import Products from "./modules/Products/index";

export default createStore({
  modules: { activePageModule, Products },
});

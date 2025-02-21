import { createStore } from "vuex";
import activePageModule from "./modules/ActivePage/index";

export default createStore({
  modules: { activePageModule },
});

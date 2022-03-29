import { createStore } from "vuex";
import commentModel from "@/store/modules/comment";

export default createStore({
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    comment: commentModel,
  },
});

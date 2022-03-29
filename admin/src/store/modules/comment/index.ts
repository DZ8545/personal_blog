import request from "@/network/request";
import { Module } from "vuex";
import { ICommentTypes } from "./types";
const model: Module<ICommentTypes, any> = {
  namespaced: true,
  state() {
    return {
      listData: [],
    };
  },
  mutations: {
    setDataList(state, data) {
      state.listData = data;
    },
  },
  getters: {},
  actions: {
    async getDataList(context, payload) {
      const res = await request.get("/comments");
      context.commit("setDataList", res.data);
    },
    async deleteComment(context, payload) {
      await request.delete(`/comments/${payload}`);
    },
    async deleteAllComment(context, payload) {
      await request.delete(`/commentsAll`);
    },
  },
};
export default model;

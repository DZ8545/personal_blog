import getServer from "@/requset/server/getServer";
import { Module } from "vuex";
import { ICommentTypes } from "./types";
const model: Module<ICommentTypes, any> = {
  namespaced: true,
  state() {
    return {
      commentList: [],
      childrenCommentList: [],
      commentNumber: 0,
    };
  },
  mutations: {
    setCommentList(state, data) {
      state.commentList = data;
    },
    setChildrenCommentList(state, data) {
      state.childrenCommentList = data;
    },
    setCommentNumber(state, data) {
      state.commentNumber = data;
    },
  },
  getters: {},
  actions: {
    async getCommentList(context, payload) {
      const res = await getServer.get(`/comments/${payload}`);
      context.commit("setCommentList", res.data);
    },
    async getChildrenCommentList(context, payload) {
      const res = await getServer.get(`/childrenComments/${payload}`);
      context.commit("setChildrenCommentList", res.data);
    },
    async getCommentNumber(context, payload) {
      const res = await getServer.get(`/commentsNumber/${payload}`);
      context.commit("setCommentNumber", res.data);
    },
    async saveComment(context, payload) {
      const res = await getServer.post("/comments", payload);
    },
  },
};
export default model;

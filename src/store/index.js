import { getItem, setItem } from "@/utils/storage";
import { createStore } from "vuex";

export default createStore({
  state: {
    token: getItem("token"), //如果不存在则为null/undefined
  },
  getters: {},
  mutations: {
    changeToken(state, newToken) {
      state.token = newToken;
      setItem("token", newToken); // 同时保存到本地
    },
    clearToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {},
});

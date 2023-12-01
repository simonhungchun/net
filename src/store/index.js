import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import {
  getHomePageData,
  getHomepageDragonBall,
  loginCellphone,
} from "@/service";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    blocks: [],
    menus: [],
    auth: {},
  },
  mutations: {
    updateBlocks(state, res) {
      state.blocks = res.data.data.blocks;
    },
    updateMenus(state, res) {
      state.menus = res.data.data;
    },
    updateAuth(state, res) {
      state.auth = res.data;
    },
  },
  actions: {
    async requestHomePageData(store) {
      const [err, homePageData] = await getHomePageData();
      if (err) return;
      store.commit("updateBlocks", homePageData);
    },
    async requestHomepageDragonBall() {
      const [err, homepageDragonball] = await getHomepageDragonBall();
      if (err) return;
      store.commit("updateMenus", homepageDragonball);
    },
    async requestLoginCellphone(store, data) {
      const [err, res] = await loginCellphone(data);
      if (err) return alert("请求错误，请稍后再试！");
      store.commit("updateAuth", res);
    },
  },
  plugins: [persistedstate()],
});

export default store;

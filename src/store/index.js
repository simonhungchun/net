import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import { getHomePageData, getHomepageDragonBall } from "@/service";
Vue.use(Vuex);

const store = new Vuex.Store({
  // state 存储公共数据
  state: {
    blocks: [],
    menus: [],
  },
  // mutations 定义同步修改公共数据的方法
  mutations: {
    // store.commit("increase")
    updateBlocks(state, res) {
      state.blocks = res.data.data.blocks;
    },
    updateMenus(state, res) {
      state.menus = res.data.data;
    },
  },
  // actions 定义异步修改公共数据的方法的（借助mutations）
  // actions如何触发store.dispatch("")
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
  },
  // plugins 扩展其他额外功能
  // 将state中的数据实时缓存到本地
  plugins: [persistedstate()],
});

window.store = store;

export default store;

<script>
import Block from "./children/block.vue";
import { getHomePageData, getHomepageDragonBall } from "@/service";
export default {
  components: { Block },
  data() {
    return {
      blocks: [],
      menus: [],
    };
  },
  async created() {
    const [errorHomePageData, homePageData] = await getHomePageData();
    if (!errorHomePageData) this.blocks = homePageData.data.data.blocks;
    const [errorHomepageDragonBall, homepageDragonBall] =
      await getHomepageDragonBall();
    if (!errorHomepageDragonBall) this.menus = homepageDragonBall.data.data;
  },
};
</script>
<template>
  <div>
    <Block v-for="block in blocks" :resource="block" :key="block.id" />
  </div>
</template>

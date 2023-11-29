<script>
import Card from "./card";
import Scroll from "@/components/scroll";
export default {
  components: { Card, Scroll },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log();
  },
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title">
    <Scroll>
      <div
        class="flex"
        :style="{ width: `${this.resource.creatives.length * 31}vw` }"
      >
        <div v-for="creative in this.resource.creatives" :key="creative.id">
          <img
            class="w-[31vw]"
            :src="creative.uiElement.image.imageUrl"
            alt=""
          />
          <div>{{ creative.uiElement.mainTitle.title }}</div>
        </div>
      </div>
    </Scroll>
  </Card>
</template>

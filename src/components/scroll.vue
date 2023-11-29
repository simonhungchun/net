<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    config: {
      type: Object,
      default: () => ({ scrollX: true }),
    },
  },
  mounted() {
    new BScroll(this.$refs.wrapper, this.config);
  },
};
</script>
<template>
  <div class="wrapper" ref="wrapper">
    <slot />
  </div>
</template>

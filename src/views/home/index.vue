<script>
import { mapState } from "vuex";
import Block from "./children/block.vue";
export default {
  components: { Block },
  computed: { ...mapState(["blocks"]) },
};
</script>
<template>
  <div>
    <button @click="fn">click me!</button>
    <Block v-for="block in blocks" :resource="block" :key="block.id" />
  </div>
</template>

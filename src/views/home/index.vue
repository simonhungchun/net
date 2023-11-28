<template>
  <div>
    <div
      class="w-[100px] h-[100px] bg-[#abcdef] rounded-md mx-auto mt-[100px] leading-[100px] text-center"
    >
      div
    </div>
    <h1>Home {{ count }}</h1>
    <button @click="setCount(23)">Sync</button>
    <button @click="delaySetCount">Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { SET_COUNT } from "@/store/mutations.type";
export default {
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations([SET_COUNT]),
    ...mapActions(["delaySetCount"]),
  },
};
</script>

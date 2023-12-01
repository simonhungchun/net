<script>
import { PasswordInput } from "vant";
export default {
  components: { PasswordInput },
  data() {
    return {
      focused: false,
      value: "",
    };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
      this.focused = true;
    },
  },
};
</script>
<template>
  <div>
    <input
      style="width: 0px; height: 0px"
      :focus="focused"
      type="tel"
      ref="input"
      v-model="value"
    />
    <PasswordInput
      @click="focusInput"
      :value="value"
      class="border-[1px]"
      :gutter="10"
      :mask="false"
      :length="4"
      :focused="focused"
    />
  </div>
</template>

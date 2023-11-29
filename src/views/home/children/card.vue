<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <div class="flex items-center justify-between">
      <div>{{ title }}</div>
      <div>更多</div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("requestHomePageData");
    this.$store.dispatch("requestHomepageDragonBall");
  },
};
</script>
<template>
  <router-view />
</template>

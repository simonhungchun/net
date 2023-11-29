<script>
import Card from "./card";
export default {
  components: { Card },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created() {},
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title"> </Card>
</template>

<template>
  <div>
    <input
      placeholder="请输入搜索关键字"
      type="text"
      v-model="keywords"
    /><button @click="search">搜索</button>
  </div>
</template>
<script>
// import axios from "axios";
import { cloudsearch } from "@/service";
export default {
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    // async函数 本质上是promise语法的语法糖（简写）
    async search() {
      const [err, res] = await cloudsearch({
        type: 1,
        keywords: this.keywords,
      });
      if (err) return alert(err);
      console.log(res);

      // post
      // axios
      //   .post(`/cloudsearch?timestamp=${Date.now()}`, {
      //     type: 1,
      //     keywords: this.keywords,
      //   })
      //   .then((item) => {
      //     console.log(item);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      /*
      cloudsearch({
        type: 1,
        keywords: this.keywords,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      */
      // axios
      //   .get("/cloudsearch", {
      //     params: { type: 1, keywords: this.keywords },
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>

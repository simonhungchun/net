<template>
  <div>
    <button @click="f1">get</button>
    <button @click="f2">post</button>
  </div>
</template>
<script>
// import axios from "axios";
import { getArtistList } from "@/service";
export default {
  methods: {
    f1() {
      // axios如何发请求？
      // 1.发送get请求
      // axios
      //   .request({
      //     method: "get", // 请求方式
      //     url: "/artist/list", // 请求路径
      //     params: { type: 2, area: 7, limit: 10 }, // get请求参数
      //   })
      //   .then((res) => console.log(res)) // 请求成功的回调
      //   .catch((err) => console.log(err)); // 请求失败的回调
      getArtistList({ type: 2, area: 7, limit: 10 })
        .then((res) => console.log(res)) // 请求成功的回调
        .catch((err) => console.log(err)); // 请求失败的回调
      // axios
      //   .get("/artist/list", {
      //     params: { type: 2, area: 7, limit: 10 }, // get请求参数
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    },
    f2() {
      // 2. 发送post请求
      // axios
      //   .request({
      //     method: "post",
      //     url: "/artist/list",
      //     data: { type: 1, area: 96, limit: 20 },
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
      // axios
      //   .post(`/artist/list?timestamp=${Date.now()}`, {
      //     type: 2,
      //     area: 7,
      //     limit: 25,
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>

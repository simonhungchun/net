const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置正向代理服务器
  devServer: {
    proxy: "http://192.168.68.118:3000",
  },
});

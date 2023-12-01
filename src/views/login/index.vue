<script>
import { getCaptcha } from "@/service";
export default {
  data() {
    return {
      phone: "",
      captcha: "",
      value: "",
      focused: false,
    };
  },
  methods: {
    async sendCode() {
      if (!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号不合法！");
      const [err, res] = await getCaptcha({ phone: this.phone });
      if (err) return alert("请求错误，请稍后再试！");
      alert("验证码发送成功！");
      console.log(res);
    },
    loginHandler() {
      if (!/^\d{4}$/.test(this.captcha)) return alert("验证码不合法");
      this.$store.dispatch("requestLoginCellphone", {
        phone: this.phone,
        captcha: this.captcha,
      });
    },
  },
};
</script>
<template>
  <div>
    <input type="tel" placeholder="请输入手机号码" v-model="phone" />
    <button @click="sendCode">发送验证码</button>
    <input
      placeholder="请输入验证码"
      type="number"
      maxlength="4"
      minlength="4"
      v-model="captcha"
    />
    <button @click="loginHandler">登录</button>
  </div>
</template>

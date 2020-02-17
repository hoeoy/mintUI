<template>
  <div class="login-person">
    <h1 class="login-title">CETC</h1>
    <h1 class="login-title">复工复产通用管理系统</h1>
    <h1 class="login-title">小达人</h1>

      <mt-field label="用户名" placeholder="请输入用户名" v-model="loginForm.username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
      <mt-switch v-model="isShowPassword">显示密码</mt-switch>
      <mt-switch v-model="rememberme">记住用户</mt-switch>
      <mt-button type="primary" @click.native="handleLogin">登录</mt-button>
      <mt-button type="danger" @click.native="handleSignUp">注册</mt-button>
  </div>
</template>

<script>
import { Indicator ,Toast} from 'mint-ui';

export default {
  name: 'PersonLogin',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin',
        captcha: null
      },
      isShowPassword:false,
      rememberme:false
    }
  },
  methods:{
    handleLogin() {
      Indicator.open('登录中...');
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        debugger
        Indicator.close();
        this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        Indicator.close();
      })
    },
    handleSignUp: function () {
      Toast({
        message: '导航到注册页面',
        // position: 'bottom',
        duration: 5000
      });
    }
  }
}
</script>

<style lang="less" scoped>
.login-title {
  font-size: 0.5rem;
  font-weight: bold;
}
</style>

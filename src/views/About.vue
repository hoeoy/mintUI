<template>
  <div class="about">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="fontTest">
      字体测试
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapGetters([
      'userList'
    ])
  },
  created() {
    this.$store
      .dispatch('getUsers')
      .then(() => {
        // this.$router.push({ path: this.redirect || '/' })
      }).catch((err) => {
        console.log('err = ', err);
      });
  }
};
</script>

<style lang="less" scoped>
.fontTest {
  width: 10rem;
  height: 5rem;
  text-align: center;
  font-size: .213333rem;
}
</style>

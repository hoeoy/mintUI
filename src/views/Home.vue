<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="`Hello ${author}, Welcome!`"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'author'
    ])
  }
};
</script>

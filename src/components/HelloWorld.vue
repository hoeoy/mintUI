<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </p>

    <p style="font-size: 16px; color: #26a2ff; margin: 20px 0;">
      <svg-icon icon-class="user" />
    </p>
    <p style="font-size: 16px; color: #26a2ff;">
      Mint UI 自带图标：
      <i class="mint-toast-icon mintui mintui-more"></i>
      <i class="mint-toast-icon mintui mintui-back"></i>
      <i class="mint-toast-icon mintui mintui-search"></i>
      <i class="mint-toast-icon mintui mintui-field-error"></i>
      <i class="mint-toast-icon mintui mintui-field-warning"></i>
      <i class="mint-toast-icon mintui mintui-success"></i>
      <i class="mint-toast-icon mintui mintui-field-success"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

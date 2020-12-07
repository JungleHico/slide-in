<template>
  <div>
    <h1>自定义指令——文字滚动加载动画</h1>
    <div class="section section-1">
      <h2 v-slidein.once>标题一</h2>
      <p v-slidein:delay.once>内容一</p>
    </div>
    <div class="section section-2">
      <h2 v-slidein>标题二</h2>
      <p v-slidein:delay>内容二</p>
    </div>
    <div class="section section-3">
      <h2 v-slidein.once>标题三（只执行一次）</h2>
      <p v-slidein:delay.once>内容三（只执行一次）</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.section {
  height: 120vh;
  padding: 32px;
}
h2 {
  margin: 16px 0;
}
.section-1 {
  background-color: darksalmon;
}
.section-2 {
  background-color: burlywood;
}
.section-3 {
  background-color: cadetblue;
}
</style>

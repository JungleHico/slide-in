import Vue from "vue";
import App from "./App.vue";
// 引入指令
import "./directive/directive";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

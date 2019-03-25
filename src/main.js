import Vue from "vue";
import App from "./App.vue";
import detectMobile from "@/components/index";

Vue.use(detectMobile);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

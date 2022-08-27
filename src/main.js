import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VAlert from "@hakut/valert";

Vue.use(VAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

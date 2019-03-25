import { detectMobile } from "@/components/VueMobileDetection";

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use({
    install(NewVue) {
      NewVue.prototype.$isMobile = detectMobile;
    }
  });
}

export default {
  install: function(NewVue) {
    NewVue.prototype.$isMobile = detectMobile;
  }
};

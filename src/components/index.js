import { detectMobile } from "@/components/VueMobileDetection";

export default {
  install: (app) => {
    app.config.globalProperties.$isMobile = detectMobile;
  },
};

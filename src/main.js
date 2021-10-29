import { createApp } from "vue";
import App from "./App.vue";
import detectMobile from "@/components/index";

const app = createApp(App);

app.use(detectMobile);
app.mount("#app");

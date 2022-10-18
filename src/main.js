import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "./router";

// import "@/assets/main.pcss";

const app = createApp(App);

app.use(router);
app.mount("#app");

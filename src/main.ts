import { createApp } from 'vue'
import App from './App.vue'
import router from "../router/index";
//整个应用支持路由。
createApp(App).use(router).mount('#app')

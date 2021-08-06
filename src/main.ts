import { createApp } from 'vue'
// import { renderToString } from '@vue/server-renderer'
import App from './App.vue'
import router from "../router/index";
import store from "../store/index";

createApp(App).use(router).use(store).mount('#app')

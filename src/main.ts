import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// import { Breakpoint } from "./utils/breakpoint";
import { Vue3Mq } from 'vue3-mq'

import '@/style/main.scss'
// import "@/style/vendors.scss";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vue3Mq)

// Breakpoint.init();

app.mount('#app')

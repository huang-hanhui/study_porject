import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "@/router/index.ts"
import { createPinia } from "pinia";

// 创建 pinia实例
const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

const http = axios.create({
  baseURL: 'http://localhost:8080/', // 确保这个 URL 是正确的
})

app.config.globalProperties.$http = http

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.less'
import 'uno.css'
import '@/styles/Design/index.less'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

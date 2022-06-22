import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(store)
app.use(router)

// 使用element-plus 
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 导入windicss
import 'virtual:windi.css'


import "./permission"

// 导入加载进度条
import "nprogress/nprogress.css"

// 自定义指令
import permission from "~/directives/permission.js"
app.use(permission)


app.mount('#app')

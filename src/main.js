import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './Routers'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import { ElMessage } from 'element-plus'
import ImportGlobalComponent from './ImportGlobalComponent'


const app = createApp(App)

app.use(Router)
app.use(ElementPlus)

const Pinia = createPinia()
Pinia.use(piniaPluginPersist)
app.use(Pinia)

ImportGlobalComponent(app)

app.config.globalProperties.$message = ElMessage

app.mount("#app")

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './Routers'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'


const app = createApp(App)

app.use(Router)
app.use(ElementPlus)

const Pinia = createPinia()
Pinia.use(piniaPluginPersist)
app.use(Pinia)


app.mount("#app")


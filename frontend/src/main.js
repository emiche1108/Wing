import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  
import './assets/style.css'    



const app = createApp(App)
app.use(router)          // これでルーター有効になる
app.mount('#app')
console.log('Vueアプリ起動成功')


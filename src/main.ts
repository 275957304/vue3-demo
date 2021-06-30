import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/global.less'
import vantComponents from './vantComponents'
createApp(App).use(vantComponents).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/global.less'
import vantComponents from './vantComponents'

import cookies from 'axios'

const app = createApp(App)


app.config.globalProperties.$http = () => {
  console.log('i am http')
}

app.use(vantComponents).use(store).use(router).mount('#app')


//app.use(store).use(router).use(ElementPlus, { size: 'small',zIndex: 3000}).component('svg-icon',svgIcon).mount('#app')
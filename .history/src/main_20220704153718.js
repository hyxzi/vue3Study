import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Element3 from 'element3'

createApp(App).use(router).use(store).use(Element3).mount('#app')

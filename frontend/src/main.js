import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from "vue3-lottie";
        

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vue3Lottie);
app.use(createPinia())
app.use(router)

app.mount('#app')


export default {
    components: {
        Vue3Lottie,
    },
};
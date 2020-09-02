import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import './index.css'
import '@simonwep/pickr/dist/themes/classic.min.css'

// Load and configure vue-router
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: import.meta.env.BASE_URL, component: App },
  ],
})
app.use(router)

app.mount('#app')

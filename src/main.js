import route from './router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)

app.use(route)
app.use(i18n)

app.mount('#app')

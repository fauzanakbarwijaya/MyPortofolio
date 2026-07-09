import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Detail from '../Detail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

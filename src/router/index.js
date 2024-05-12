import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import AboutView from "@/views/About.vue";
import AchievementView from "@/views/Achievement.vue";

const routes = [
    { path: '', component: HomeView},
    { path: '/about', component: AboutView},
    { path: '/achievement', component: AchievementView}
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route
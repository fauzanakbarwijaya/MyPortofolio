import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import AboutView from "@/views/About.vue";
import AchievementView from "@/views/Achievement.vue";
import ExperienceView from "@/views/Experience.vue";
import ProjectView from "@/views/Project.vue";

const routes = [
    { path: '', component: HomeView},
    { path: '/about', component: AboutView},
    { path: '/achievement', component: AchievementView},
    { path: '/experience', component: ExperienceView},
    { path: '/project', component: ProjectView},
]

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route
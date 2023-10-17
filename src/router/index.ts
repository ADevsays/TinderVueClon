import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DiscoverPage from '../views/DiscoverPage.vue';

const routes: RouteRecordRaw[] = [
    {path: '/', component:DiscoverPage},
];

const router = createRouter({
    history: createWebHistory(),
    routes 
});

export default router;
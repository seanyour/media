import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";


const routes:RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('components/Login.vue'),
    },
    {
        path: '/',
        redirect: '/login',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
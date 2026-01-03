import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/main/Index.vue"),
        name: "main.index",
    },
    {
        path: "/furniture",
        component: () => import("./components/furniture/Index.vue"),
        name: "furniture.index",
    },
    {
        path: "/login",
        component: () => import("./components/user/Login.vue"),
        name: "user.login",
    },
    {
        path: "/registration",
        component: () => import("./components/user/Registration.vue"),
        name: "user.registration",
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});

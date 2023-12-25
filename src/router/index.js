import { createRouter, createWebHistory } from 'vue-router';


import routes from "@/router/routes.js";


export default createRouter({
    routes:routes,
    history:createWebHistory(),
    linkActiveClass:'active'
})


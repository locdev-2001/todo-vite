import { createRouter, createWebHistory } from 'vue-router';


import routes from "@/router/routes.js";
import {userLoadedState} from "@/stores/loading.js";


const router = createRouter({
    routes:routes,
    history:createWebHistory(),
    linkActiveClass:'active'
})

router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        return {
            name:'login',
            query:{
                redirect:to.fullPath,
            }
        }
    }
    const isLoading = userLoadedState();
    const {changeStateTrue} = isLoading
    changeStateTrue();
    setTimeout(() => {
        next();
    }, 500);
})
router.afterEach((to, from) => {
    const isLoading = userLoadedState();
    const { changeStateFalse } = isLoading;
    changeStateFalse();
});
export default router
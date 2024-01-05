import {defineStore} from "pinia";
import {ref , reactive} from "vue";

export const userLoadedState = defineStore("isLoading",()=>{
    const state =ref(false);
    const changeStateTrue = () => {
        state.value = true
    }
    const changeStateFalse = () => {
        state.value = false
    }
    return { state, changeStateTrue, changeStateFalse }
})
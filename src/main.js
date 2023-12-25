import './assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice/toastservice.esm.js";
import {createPinia} from 'pinia'
import App from './App.vue'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Toast from "primevue/toast";
import route from "@/router";
const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.use(createPinia())

app.use(route)
app.component('Toast',Toast)
app.mount('#app')

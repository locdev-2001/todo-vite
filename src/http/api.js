import axios from "axios";

const api = axios.create({
    baseURL:"https://task-api.infinityfreeapp.com/api/v1/",

})
export default api
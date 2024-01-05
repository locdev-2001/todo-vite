import axios from "axios";

const api = axios.create({
    baseURL:"https://laravel-api.io.vn/api/v1/",
})
export default api
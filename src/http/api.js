import axios from "axios";

const api = axios.create({
    baseURL:"http://laravel-api.com/api/v1/",

})
export default api
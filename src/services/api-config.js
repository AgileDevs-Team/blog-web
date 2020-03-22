import axios from "axios";

const apiConfig = axios.create({
    baseURL: "http://localhost:8081"
})

export default apiConfig;
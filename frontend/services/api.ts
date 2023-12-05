import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})

export {api}
export default api
import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ae62495cbda94950bec3eed4619b3834"
    }
})
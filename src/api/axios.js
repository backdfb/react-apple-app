import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e84db959caecacb209e603a5b6d1203a",
        language: "ko-KR"
    }
})

export default instance;
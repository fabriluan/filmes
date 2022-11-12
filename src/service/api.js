import axios from "axios";

// Base Url:  https://api.themoviedb.org/3
// Api_Key: d71237d08ef1ed2a882b49bf5d36150c

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api ;  
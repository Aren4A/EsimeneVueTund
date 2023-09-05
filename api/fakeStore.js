import axios from "axios";

export const fakeStoreAPI = axios.create({
    baseURL: import.meta.env.VITE_FAKESTOREAPI_BASE_URL,
});
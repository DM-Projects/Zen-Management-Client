import Axios from 'axios';
import { authHeader } from './Authentication/auth';
const apiClient = Axios.create({
    baseURL: "http://localhost:8080",
    // headers: authHeader()
});

export {apiClient}
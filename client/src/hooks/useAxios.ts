import axios, { AxiosInstance } from 'axios';


const baseUrl = 'http://localhost:5000/api';

const useAxios = () => {

    let token:string = localStorage.getItem('token') || 'null'
    const refreshToken:string = localStorage.getItem('refreshToken') || 'null'

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const protectedInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    protectedInstance.interceptors.request.use(async req => {
        token = localStorage.getItem('token') || 'null'
        req.headers['x-auth-token'] = `${token}`
        return req
    })

    protectedInstance.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            const originalRequest = error.config
            if (error.response.status === 401 && !originalRequest._retry){
                originalRequest._retry = true
    
                const newAccessToken = await refreshAccessToken(refreshToken)
                if (newAccessToken){
                    token = newAccessToken
                    localStorage.setItem('token', token)
                    return protectedInstance(originalRequest)
                }
            }
    
            return Promise.reject(error)
        }
    )

    const refreshAccessToken = async (refresh: string | null) => {
        try {
            const response = await axiosInstance.post('user/refresh-token', {refresh: refresh})
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    return { axiosInstance, protectedInstance };
};

export default useAxios;

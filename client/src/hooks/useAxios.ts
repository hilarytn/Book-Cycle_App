import axios, { AxiosInstance } from 'axios';


const baseUrl = 'http://localhost:5000/api';

const useAxios = () => {

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { axiosInstance };
};

export default useAxios;

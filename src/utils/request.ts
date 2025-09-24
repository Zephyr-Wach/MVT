import axios from 'axios'
import type { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance

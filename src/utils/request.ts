import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

// 定义响应数据格式
interface ApiResponse<T = any> {
    code: number
    data: T
    message: string
}

// 定义自定义配置接口
interface CustomAxiosConfig extends AxiosRequestConfig {
    retry?: boolean
}

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    paramsSerializer: (params) => {
        return Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
            .join('&')
    },
})

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error: AxiosError) => {
        console.error('Request Error:', error)
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    <T>(response: AxiosResponse<ApiResponse<T>>) => {
        const { code, data, message } = response.data
        if (code !== 200) {
            console.error('API Error:', message)
            return Promise.reject(new Error(message))
        }
        return data as T
    },
    (error: AxiosError) => {
        const { response, code, message } = error
        if (response) {
            switch (response.status) {
                case 401:
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                    break
                case 403:
                    console.error('Forbidden:', message)
                    break
                case 500:
                    console.error('Server Error:', message)
                    break
                default:
                    console.error('Response Error:', message)
            }
        } else if (code === 'ECONNABORTED') {
            console.error('Request Timeout')
        } else {
            console.error('Network Error:', message)
        }
        return Promise.reject(error)
    }
)

// 封装请求方法
const request = {
    get<T = any>(url: string, config?: CustomAxiosConfig): Promise<T> {
        return instance.get<ApiResponse<T>>(url, config) as unknown as Promise<T>
    },
    post<T = any>(url: string, data?: any, config?: CustomAxiosConfig): Promise<T> {
        return instance.post<ApiResponse<T>>(url, data, config) as unknown as Promise<T>
    },
    put<T = any>(url: string, data?: any, config?: CustomAxiosConfig): Promise<T> {
        return instance.put<ApiResponse<T>>(url, data, config) as unknown as Promise<T>
    },
    delete<T = any>(url: string, config?: CustomAxiosConfig): Promise<T> {
        return instance.delete<ApiResponse<T>>(url, config) as unknown as Promise<T>
    },
    custom<T = any>(config: CustomAxiosConfig): Promise<T> {
        return instance.request<ApiResponse<T>>(config) as unknown as Promise<T>
    },
}

export default request

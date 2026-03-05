import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { useUserStore } from '@/stores/user'
import type { ApiResponse } from '@/types/api'

type RequestConfig = AxiosRequestConfig

const httpClient: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore()
    const token = userStore.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

httpClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<unknown>>) => {
    const { code, message } = response.data

    if (code !== 200) {
      return Promise.reject(new Error(message || 'API request failed'))
    }

    return response
  },
  (error: AxiosError<ApiResponse<unknown>>) => {
    if (error.response) {
      const status = error.response.status
      const message = error.response.data?.message ?? error.message
      console.error(`[HTTP ${status}] ${message}`)
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout')
    } else {
      console.error(`Network error: ${error.message}`)
    }

    return Promise.reject(error)
  },
)

const request = {
  get<T = unknown>(url: string, config?: RequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return httpClient.get<ApiResponse<T>>(url, config)
  },
  post<T = unknown>(url: string, data?: unknown, config?: RequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return httpClient.post<ApiResponse<T>>(url, data, config)
  },
  put<T = unknown>(url: string, data?: unknown, config?: RequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return httpClient.put<ApiResponse<T>>(url, data, config)
  },
  delete<T = unknown>(url: string, config?: RequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return httpClient.delete<ApiResponse<T>>(url, config)
  },
  custom<T = unknown>(config: RequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return httpClient.request<ApiResponse<T>>(config)
  },
}

export default request

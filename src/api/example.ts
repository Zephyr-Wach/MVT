import request from '@/utils/request'

import type { LoginByEmailResponse } from './auth'

export const getWithoutParams = () => {
  return request.get<LoginByEmailResponse>('/getWithOutParam')
}

export const getWithoutQuery = (userId: string) => {
  return request.get<LoginByEmailResponse>(`/getWithoutQuery/${userId}`)
}

export const getWithQuery = (params: { name?: string; page?: number }) => {
  return request.get<LoginByEmailResponse[]>('/getWithQuery', { params })
}

export const postWithBody = (user: { email: string; userPwd?: string }) => {
  return request.post<LoginByEmailResponse>('/postWithBody', user)
}

export const postWithoutBody = () => {
  return request.post<{ taskId: string }>('/postWithOutBody')
}

export const putRequest = (userId: string, data: { userName?: string; email?: string }) => {
  return request.put<LoginByEmailResponse>(`/putRequest/${userId}`, data)
}

export const deleteRequest = (userId: string) => {
  return request.delete(`/delRequest/${userId}`)
}

export const customRequestExample = () => {
  return request.custom<{ message: string }>({
    url: '/custom/endpoint',
    method: 'GET',
    headers: {
      'X-Custom-Header': 'example',
    },
    params: {
      foo: 'bar',
    },
  })
}

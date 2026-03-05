import request from '@/utils/request'

export interface LoginByEmailPayload {
  email: string
  userPwd: string
}

export interface LoginByEmailResponse {
  refreshToken: string
  token: string
  userId: string
  userName: string
}

export const loginByEmail = (payload: LoginByEmailPayload) => {
  return request.post<LoginByEmailResponse>('/public/usr/emailLogin', payload)
}

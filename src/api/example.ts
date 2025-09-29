import request from '@/utils/request'

// Response Example
interface UserInfo {
    refreshToken: string;
    token: string
    userId: string
    userName: string
}

// -------------------------
// GET Request
// -------------------------

// - GET without parameters
export function getWithOutParam() {
    return request.get<UserInfo>('/getWithOutParam')
}

// - GET without query
export function getWithoutQuery(userId: string) {
    return request.get<UserInfo>(`/getWithoutQuery/${userId}`)
}

// - GET with query
export function getWithQuery(params: { name?: string; page?: number }) {
    return request.get<UserInfo[]>('/getWithQuery', { params })
}

// -------------------------
// POST Request
// -------------------------

// - POST with body
export function postWithBody(user: { email: string; userPwd?: string }) {
    return request.post<UserInfo>('/postWithBody', user)
}

// - POST without body
export function postWithOutBody() {
    return request.post<{ taskId: string }>('/postWithOutBody')
}

// -------------------------
// PUT Request
// -------------------------

export function putRequest(userId: string, data: { userName?: string; email?: string }) {
    return request.put<UserInfo>(`/putRequest/${userId}`, data)
}

// -------------------------
// DELETE Request
// -------------------------

export function delRequest(userId: string) {
    return request.delete(`/delRequest/${userId}`)
}

// -------------------------
// Custom Request Example
// -------------------------

export function customRequestExample() {
    return request.custom<{ msg: string }>({
        url: '/custom/endpoint',
        method: 'GET',
        headers: {
            'X-Custom-Header': 'example'
        },
        params: {
            foo: 'bar'
        }
    })
}

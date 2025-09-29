import request from '@/utils/request'

// 接口响应类型示例
interface UserInfo {
    userId: string
    userName: string
    email?: string
}

// -------------------------
// GET 请求
// -------------------------

// 1️⃣ GET 不带参数
export function getUserList() {
    return request.get<UserInfo[]>('/users')
}

// 2️⃣ GET 带 query 参数
export function getUserById(userId: string) {
    return request.get<UserInfo>(`/users/${userId}`)
}

// 3️⃣ GET 带 query 对象
export function searchUsers(params: { name?: string; page?: number }) {
    return request.get<UserInfo[]>('/users/search', { params })
}

// -------------------------
// POST 请求
// -------------------------

// 4️⃣ POST 带 body
export function createUser(user: { userName: string; email?: string }) {
    return request.post<UserInfo>('/users', user)
}

// 5️⃣ POST 不带 body
export function triggerTask() {
    return request.post<{ taskId: string }>('/task/run')
}

// -------------------------
// PUT 请求
// -------------------------

export function updateUser(userId: string, data: { userName?: string; email?: string }) {
    return request.put<UserInfo>(`/users/${userId}`, data)
}

// -------------------------
// DELETE 请求
// -------------------------

export function deleteUser(userId: string) {
    return request.delete(`/users/${userId}`)
}

// -------------------------
// 自定义请求示例
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

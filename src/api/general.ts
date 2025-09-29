import request from '@/utils/request'

// Sidebar Menu
export interface SideBarItem {
    id: number
    name: string
    path?: string
    children?: SideBarItem[]
}

export function fetchSideBar() {
    return request.get<SideBarItem[]>('/fetchSideBar')
}
import request from '@/utils/request'

export interface SidebarItem {
  id: number
  name: string
  path?: string
  children?: SidebarItem[]
}

export const fetchSidebar = () => {
  return request.get<SidebarItem[]>('/fetchSideBar')
}

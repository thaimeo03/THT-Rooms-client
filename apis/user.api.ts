import { IProfileResponse } from '@/interfaces/users.interface'
import api from './api'
import { MessageResponse } from '@/interfaces/response.interface'

export const getProfileApi = async () => {
  const res = await api.get<IProfileResponse>('/users/profile')
  return res.data
}

export const leaveHostApi = async () => {
  const res = await api.delete<MessageResponse>('/users/leave-host')
  return res.data
}

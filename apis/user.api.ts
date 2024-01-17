import { IProfileResponse } from '@/interfaces/users.interface'
import api from './api'

export const getProfile = async () => {
  const res = await api.get<IProfileResponse>('/users/profile')
  return res.data
}

import { DataResponse } from '@/interfaces/response.interface'
import api from './api'
import { IRole } from '@/interfaces/role.interface'

export const getRoleApi = async (roomId: string) => {
  const res = await api.get<DataResponse<IRole>>(`/roles/${roomId}`)
  return res.data
}

import api from './api'
import { IRoomResponse } from '@/interfaces/room.interface'

export const getRoomsByHostIdApi = async (hostId: string) => {
  const res = await api.get<IRoomResponse>(`/rooms/${hostId}`)
  return res.data
}

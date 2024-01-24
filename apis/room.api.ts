import api from './api'
import { ICreateRoom, IRoomResponse, IRoomsResponse } from '@/interfaces/room.interface'

export const getRoomsByHostIdApi = async (hostId: string) => {
  const res = await api.get<IRoomsResponse>(`/rooms/${hostId}`)
  return res.data
}

export const createRoomApi = async (data: ICreateRoom) => {
  const res = await api.post<IRoomResponse>('/rooms/create', data)
  return res.data
}

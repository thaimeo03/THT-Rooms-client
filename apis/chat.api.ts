import { IChat } from '@/interfaces/chat.interface'
import api from './api'

export const getAllChatsApi = async (roomId: string) => {
  const res = await api.get<IChat[]>(`/chats/room/${roomId}`)
  return res.data
}

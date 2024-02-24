import { Roles } from '@/common/enums/roles.enum'

interface IUserSendedMessage {
  id: string
  username: string
  avatar: string
  role: Roles
}

export interface IChat {
  id: string
  user: IUserSendedMessage
  message: string
  created_at: string
}

export interface IMessage {
  userId: string
  message: string
}

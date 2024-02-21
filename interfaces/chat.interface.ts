interface IUserSendedMessage {
  id: string
  username: string
  avatar: string
}

export interface IChat {
  user: IUserSendedMessage
  message: string
  created_at: string
}

export interface IMessage {
  userId: string
  message: string
}

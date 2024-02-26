'use client'
import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'
import { IChat } from '@/interfaces/chat.interface'
import { useContext, useEffect, useState } from 'react'

interface MessageProps {
  chat: IChat
  isLastMessage: boolean
  isSender: boolean
  isSended: boolean
  isSending: boolean
}

export default function Message({ chat, isLastMessage, isSender, isSended, isSending }: MessageProps) {
  const { auth } = useContext(AuthContext) as AuthContextType
  const [stateMessage, setStateMessage] = useState('')

  useEffect(() => {
    if (isSender && isLastMessage) {
      if (isSended) {
        setStateMessage('Sended')
      } else if (isSending) {
        setStateMessage('Sending...')
      }
    } else {
      setStateMessage('')
    }
  }, [isLastMessage, isSender, isSended, isSending])

  return (
    <div>
      <div className={`flex ${chat.user.id === auth.profile.id ? 'justify-end' : 'justify-start'}`}>
        <div className='flex flex-col'>
          <p className='bg-primary px-2 py-1 rounded-md'>{chat.message}</p>
          <span className='text-xs text-gray-400 flex justify-end'>{stateMessage}</span>
        </div>
      </div>
    </div>
  )
}

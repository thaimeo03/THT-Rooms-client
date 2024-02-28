'use client'
import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
        <div className='flex flex-row space-x-1'>
          {!(auth.profile.id === chat.user.id) && (
            <Avatar className='w-8 h-8'>
              <AvatarImage src={chat.user.avatar} width={5} height={5} />
              <AvatarFallback>{chat.user.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          )}
          <div className='flex flex-col'>
            {!(auth.profile.id === chat.user.id) && (
              <span className='text-gray-400 font-semibold text-xs mb-1'>{chat.user.username}</span>
            )}
            <p className='bg-primary px-3 py-1 rounded-md'>{chat.message}</p>
            <span className='text-xs text-gray-400 flex justify-end'>{stateMessage}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

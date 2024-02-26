'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useContext, useEffect, useState } from 'react'
import { SocketContext } from './socket-provider'
import { Socket } from 'socket.io-client'
import { IChat, IMessage } from '@/interfaces/chat.interface'
import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { getAllChatsApi } from '@/apis/chat.api'
import Message from './message'
import { pick } from 'lodash'

interface ISendMessage {
  content: string
  isSender: boolean
}

export default function Chat() {
  const params = useParams()
  const socket = useContext(SocketContext) as Socket
  const { auth } = useContext(AuthContext) as AuthContextType

  const [sendMessage, setSendMessage] = useState({} as ISendMessage)
  const [isSending, setIsSending] = useState(false)
  const [isSended, setIsSended] = useState(false)

  const [chats, setChats] = useState<IChat[]>()

  // Functions
  const { data, isSuccess } = useQuery({
    queryKey: ['chats'],
    queryFn: () => getAllChatsApi(params.id as string)
  })

  useEffect(() => {
    return setChats(data as IChat[])
  }, [isSuccess])

  useEffect(() => {
    if (!socket) return

    const handleReceiveMessage = (chat: IChat) => {
      setChats((pre) => {
        if (chat.user.id !== auth.profile.id) {
          if (pre) {
            return [...pre, chat]
          }
          return [chat]
        }
        return pre
      })
      setIsSended(true)
      setIsSending(false)
    }

    socket.on('receive-message', handleReceiveMessage)

    return () => {
      socket.off('receive-message')
    }
  }, [socket])

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: IMessage = {
      message: sendMessage.content,
      userId: auth.profile.id
    }

    const newChat: IChat = {
      user: pick(auth.profile, ['id', 'username', 'avatar', 'role']),
      created_at: new Date().toISOString(),
      message: sendMessage.content
    }

    socket.emit('send-message', payload)

    setChats((pre) => {
      if (pre) {
        return [...pre, newChat]
      }
      return [newChat]
    })
    setIsSended(false)
    setIsSending(true)
    return setSendMessage({ content: '', isSender: true })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Chat</Button>
      </SheetTrigger>
      <SheetContent className='p-0'>
        <SheetHeader className='border-b-2 shadow-slate-700'>
          <SheetTitle className='mt-4'>
            <p className='px-4 py-2'>Chat</p>
          </SheetTitle>
        </SheetHeader>
        <div className='relative h-[calc(100%-62px)]'>
          <ScrollArea className='h-[calc(100%-6rem)] px-4 scale-y-[-1]'>
            <div className='flex flex-col gap-4 mt-2'>
              {chats &&
                chats.map((chat, index) => (
                  <Message
                    key={chat.id || index}
                    chat={chat}
                    isLastMessage={index === chats.length - 1}
                    isSender={sendMessage.isSender}
                    isSended={isSended}
                    isSending={isSending}
                  />
                ))}
            </div>
          </ScrollArea>
          <div className='absolute bottom-0 left-0 right-0 h-20 z-50 bg-background'>
            <div className='h-full px-4 flex flex-row space-x-3'>
              <form className='w-full' onSubmit={handleSendMessage}>
                <Input
                  placeholder='Type a message'
                  className='w-full'
                  value={sendMessage.content}
                  onChange={(e) => setSendMessage({ ...sendMessage, content: e.target.value })}
                />
              </form>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

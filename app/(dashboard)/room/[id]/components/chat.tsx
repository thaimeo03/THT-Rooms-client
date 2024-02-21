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

export default function Chat() {
  const socket = useContext(SocketContext) as Socket
  const { auth } = useContext(AuthContext) as AuthContextType
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!socket) return

    const handleReceiveMessage = (chat: IChat) => {
      console.log(chat)
    }

    socket.on('receive-message', handleReceiveMessage)

    return () => {
      socket.off('receive-message')
    }
  }, [socket])

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: IMessage = {
      message: message,
      userId: auth.profile.id
    }

    socket.emit('send-message', payload)
    setMessage('')
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
        <div className='relative h-[calc(100%-62px)] px-4'>
          <ScrollArea className='h-[calc(100%-5rem)]'>
            <div className='flex flex-col gap-10 ]'>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
              <p>Message</p>
            </div>
          </ScrollArea>
          <div className='absolute bottom-0 left-0 right-0 h-20 z-50 bg-background'>
            <div className='h-full px-4 flex flex-row space-x-3'>
              <form className='w-full' onSubmit={handleSendMessage}>
                <Input
                  placeholder='Type a message'
                  className='w-full'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

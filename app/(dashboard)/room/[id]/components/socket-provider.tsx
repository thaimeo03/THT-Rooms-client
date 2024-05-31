import { createContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const SocketContext = createContext<Socket | null>(null)

export default function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const connection = io(process.env.NEXT_PUBLIC_BASE_URL as string)
    console.log('Socket connection', connection)
    setSocket(connection)
  }, [])

  socket?.on('connect_error', async (error) => {
    console.log('socket error', error)
    await fetch('/api/reconnect')
  })

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

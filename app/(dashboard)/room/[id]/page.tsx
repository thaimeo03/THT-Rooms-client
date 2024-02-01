'use client'
import { io } from 'socket.io-client'
import { AuthContext, AuthContextType } from '../../components/auth-context-provider'
import { useContext, useEffect } from 'react'

const socket = io('http://localhost:9999')

export default function Room({ params }: { params: { id: string } }) {
  const { id } = params
  const { auth } = useContext(AuthContext) as AuthContextType

  useEffect(() => {
    socket.emit('join-room', {
      roomId: id,
      myId: auth.profile.id
    })
  }, [id, auth.profile])

  return <div>Room page</div>
}

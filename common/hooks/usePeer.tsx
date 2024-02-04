'use client'
import { useParams } from 'next/navigation'
import { socket } from './useSocketRoom'
import { useContext, useEffect, useRef, useState } from 'react'
import { Peer } from 'peerjs'
import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'

export default function usePeer() {
  const params = useParams()
  const roomId = params.id as string
  const [peer, setPeer] = useState<Peer | null>(null)
  const [myPeerId, setMyPeerId] = useState('')
  const isPeerSet = useRef(false)

  const { auth } = useContext(AuthContext) as AuthContextType

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return
    isPeerSet.current = true

    let myPeer
    ;(async function initPeer() {
      myPeer = new Peer()
      setPeer(myPeer)

      myPeer.on('open', (id: string) => {
        console.log(`Your peer ID is: ${id}`)
        setMyPeerId(id)
        socket.emit('join-room', {
          roomId,
          myId: auth.profile.id
        })
      })
    })()
  }, [roomId, socket])

  return {
    peer,
    myPeerId
  }
}

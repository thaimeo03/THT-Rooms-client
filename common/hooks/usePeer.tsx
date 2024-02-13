'use client'
import { useParams } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { Peer } from 'peerjs'
import { SocketContext } from '@/app/(dashboard)/room/[id]/components/socket-provider'
import { Socket } from 'socket.io-client'

export default function usePeer() {
  const params = useParams()
  const socket = useContext(SocketContext) as Socket
  const roomId = params.id as string
  const [peer, setPeer] = useState<Peer | null>(null)
  const [myPeerId, setMyPeerId] = useState('')
  const isPeerSet = useRef(false)

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
          myPeerId: id
        })
      })
    })()
  }, [roomId, socket])

  return {
    peer,
    myPeerId
  }
}

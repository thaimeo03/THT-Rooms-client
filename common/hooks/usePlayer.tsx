'use client'
import { useState } from 'react'
import { cloneDeep } from 'lodash'
import Peer from 'peerjs'
import { useRouter } from 'next/navigation'
import { io } from 'socket.io-client'

const socket = io('http://localhost:9999')

export default function usePlayer({ myPeerId, roomId, peer }: { myPeerId: string; roomId: string; peer: Peer | null }) {
  const router = useRouter()
  const [players, setPlayers] = useState<any>({})
  const playersCopy = cloneDeep(players)

  const playerHighlighted = playersCopy[myPeerId]
  delete playersCopy[myPeerId]
  const nonHighlightedPlayers = playersCopy

  const leaveRoom = () => {
    socket.emit('user-leave', { myPeerId, roomId })
    console.log('leaving room', roomId)
    peer?.disconnect()
    router.push('/')
  }

  const toggleAudio = () => {
    console.log('I toggled my audio')
    setPlayers((prev: any) => {
      const copy = cloneDeep(prev)
      copy[myPeerId].muted = !copy[myPeerId].muted
      return { ...copy }
    })
    socket.emit('user-toggle-audio', { myPeerId, roomId })
  }

  const toggleVideo = () => {
    console.log('I toggled my video')
    setPlayers((prev: any) => {
      const copy = cloneDeep(prev)
      copy[myPeerId].playing = !copy[myPeerId].playing
      return { ...copy }
    })
    socket.emit('user-toggle-video', { myPeerId, roomId })
  }

  return {
    players,
    setPlayers,
    playerHighlighted,
    nonHighlightedPlayers,
    leaveRoom,
    toggleAudio,
    toggleVideo
  }
}

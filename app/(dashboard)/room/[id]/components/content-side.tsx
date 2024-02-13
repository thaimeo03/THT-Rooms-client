'use client'
import usePeer from '@/common/hooks/usePeer'
import Player from './player'
import { useParams } from 'next/navigation'
import { Socket } from 'socket.io-client'
import useMediaStream from '@/common/hooks/useMediaStream'
import usePlayer from '@/common/hooks/usePlayer'
import { useContext, useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'
import { SocketContext } from './socket-provider'

export default function ContentSide() {
  const params = useParams()
  const socket = useContext(SocketContext) as Socket
  const roomId = params.id as string
  const { myPeerId, peer } = usePeer()
  const { stream } = useMediaStream()
  const { players, setPlayers, playerHighlighted, nonHighlightedPlayers } = usePlayer({
    myPeerId: myPeerId,
    roomId,
    peer
  })
  const [users, setUsers] = useState([])

  console.log('playerHighlighted', playerHighlighted)
  console.log('nonHighlightedPlayers', nonHighlightedPlayers)

  useEffect(() => {
    if (!socket || !peer || !stream) return
    const handleUserConnected = (newUser: any) => {
      console.log(`user connected in room with userId ${newUser}`)

      const call = peer.call(newUser, stream)

      call.on('stream', (incomingStream) => {
        console.log(`incoming stream from ${newUser}`)
        setPlayers((prev: any) => ({
          ...prev,
          [newUser]: {
            url: incomingStream,
            muted: true,
            playing: true
          }
        }))

        setUsers((prev: any) => ({
          ...prev,
          [newUser]: call
        }))
      })
    }
    socket.on('user-connected', handleUserConnected)

    return () => {
      socket.off('user-connected', handleUserConnected)
    }
  }, [peer, setPlayers, socket, stream])

  useEffect(() => {
    if (!peer || !stream) return
    peer.on('call', (call) => {
      const { peer: callerId } = call
      call.answer(stream)

      call.on('stream', (incomingStream) => {
        console.log(`incoming stream from ${callerId}`)
        setPlayers((prev: any) => ({
          ...prev,
          [callerId]: {
            url: incomingStream,
            muted: true,
            playing: true
          }
        }))

        setUsers((prev) => ({
          ...prev,
          [callerId]: call
        }))
      })
    })
  }, [peer, setPlayers, stream])

  useEffect(() => {
    if (!socket) return
    const handleToggleAudio = (userId: any) => {
      console.log(`user with id ${userId} toggled audio`)
      setPlayers((prev: any) => {
        const copy = cloneDeep(prev)
        copy[userId].muted = !copy[userId].muted
        return { ...copy }
      })
    }

    const handleToggleVideo = (userId: any) => {
      console.log(`user with id ${userId} toggled video`)
      setPlayers((prev: any) => {
        const copy = cloneDeep(prev)
        copy[userId].playing = !copy[userId].playing
        return { ...copy }
      })
    }

    const handleUserLeave = (userId: any) => {
      console.log(`user ${userId} is leaving the room`)
      ;(users[userId] as any)?.close()
      const playersCopy = cloneDeep(players)
      delete playersCopy[userId]
      setPlayers(playersCopy)
    }
    socket.on('user-toggle-audio', handleToggleAudio)
    socket.on('user-toggle-video', handleToggleVideo)
    socket.on('user-leave', handleUserLeave)
    return () => {
      socket.off('user-toggle-audio', handleToggleAudio)
      socket.off('user-toggle-video', handleToggleVideo)
      socket.off('user-leave', handleUserLeave)
    }
  }, [players, setPlayers, socket, users])

  useEffect(() => {
    if (!stream || !myPeerId) return
    console.log(`setting my stream ${myPeerId}`)
    setPlayers((prev: any) => ({
      ...prev,
      [myPeerId]: {
        url: stream,
        muted: true,
        playing: true
      }
    }))
  }, [myPeerId, setPlayers, stream])

  return (
    <div>
      <div>
        {playerHighlighted && (
          <Player
            url={playerHighlighted.url}
            muted={playerHighlighted.muted}
            playing={playerHighlighted.playing}
            isActive
          />
        )}
      </div>
      <div>
        {Object.keys(nonHighlightedPlayers).map((playerId) => {
          const { url, muted, playing } = nonHighlightedPlayers[playerId]
          return <Player key={playerId} url={url} muted={muted} playing={playing} isActive={false} />
        })}
      </div>
    </div>
  )
}

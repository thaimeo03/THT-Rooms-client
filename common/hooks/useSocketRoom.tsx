'use client'
import { useParams } from 'next/navigation'
import { io } from 'socket.io-client'
import usePeer from './usePeer'
import useMediaStream from './useMediaStream'
import usePlayer from './usePlayer'

export const socket = io('http://localhost:9999')

export default function useSocketRoom() {
  // const params = useParams()
  // const roomId = params.id as string
  // const { myPeerId, peer } = usePeer()
  // const { stream } = useMediaStream()
  // const { players, setPlayers, playerHighlighted, nonHighlightedPlayers } = usePlayer({
  //   myPeerId: myPeerId,
  //   roomId,
  //   peer
  // })

  return {} // Return something there
}

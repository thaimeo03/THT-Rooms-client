'use client'
import Player from './player'
import useSocketRoom from '@/common/hooks/useSocketRoom'

export default function ContentSide() {
  const {} = useSocketRoom()

  return (
    <div>
      <div>
        <Player />
      </div>
    </div>
  )
}

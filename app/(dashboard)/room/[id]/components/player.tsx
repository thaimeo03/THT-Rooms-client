'use client'
import ReactPlayer from 'react-player'

export default function Player({
  url,
  muted,
  playing,
  isActive
}: {
  url: string
  muted: boolean
  playing: boolean
  isActive: boolean
}) {
  return isActive ? (
    <div className='w-full h-full'>
      {playing && <ReactPlayer url={url} muted={muted} playing={playing} width={'100%'} height={'100%'} />}
    </div>
  ) : (
    <div className='w-40 h-40 border border-emerald-400'>
      {playing && <ReactPlayer url={url} muted={muted} playing={playing} width={'100%'} height={'100%'} />}
    </div>
  )
}

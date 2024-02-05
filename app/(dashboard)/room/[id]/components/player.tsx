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
  console.log(url, muted, playing, isActive)

  return (
    <div>
      <div className='w-full h-[70vh] bg-slate-800'>
        {playing && <ReactPlayer url={url} muted={muted} playing={playing} width={'100%'} height={'100%'} />}
      </div>
    </div>
  )
}

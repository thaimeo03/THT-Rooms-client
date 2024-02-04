import ReactPlayer from 'react-player'

export default function Player() {
  return (
    <div>
      <div className='w-full h-[70vh] bg-slate-800'>
        <ReactPlayer url='https://youtu.be/D4Sj-N6pBzc' muted={true} playing={true} width={'100%'} height={'100%'} />
      </div>
    </div>
  )
}

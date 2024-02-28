'use client'
import { Button } from '@/components/ui/button'
import { IRoom } from '@/interfaces/room.interface'
import { useRouter } from 'next/navigation'
import RoomSetting from './room-setting'

export default function BoxJoinRoom({ room }: { room: IRoom }) {
  const router = useRouter()
  const handleJoinRoom = () => {
    router.push(`/room/${room.id}`)
  }

  return (
    <div
      className={`col-span-2 rounded-lg border text-card-foreground shadow-sm w-full max-w-xs bg-transparent`}
      style={{ backgroundColor: room.color }}
    >
      <div className='relative'>
        <div className='absolute top-1 right-1'>
          <RoomSetting roomId={room.id} />
        </div>
        <div className='flex flex-col space-y-1.5 p-4'>
          <h3 className='text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-white'>
            {room.name}
          </h3>
        </div>
        <div className='p-4 text-white'>
          <p>Click the button below to join the room.</p>
        </div>
        <div className='flex items-center p-4'>
          <Button onClick={handleJoinRoom} className={`block bg-primary text-white hover:bg-opacity-70`}>
            Join room
          </Button>
        </div>
      </div>
    </div>
  )
}

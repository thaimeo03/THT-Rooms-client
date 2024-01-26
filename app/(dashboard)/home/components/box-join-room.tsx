import { Button } from '@/components/ui/button'
import { IRoom } from '@/interfaces/room.interface'

export default function BoxJoinRoom({ room }: { room: IRoom }) {
  return (
    <div className={`col-span-2 rounded-lg border text-card-foreground shadow-sm w-full max-w-xs bg-[${room.color}]`}>
      <div className='flex flex-col space-y-1.5 p-4'>
        <h3 className='text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-white'>{room.name}</h3>
      </div>
      <div className='p-4 text-white'>
        <p>Click the button below to join the room.</p>
      </div>
      <div className='flex items-center p-4'>
        <Button className={`bg-primary text-white hover:bg-opacity-70`}>Join room</Button>
      </div>
    </div>
  )
}
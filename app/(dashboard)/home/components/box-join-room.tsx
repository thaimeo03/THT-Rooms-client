import { Button } from '@/components/ui/button'

export default function BoxJoinRoom() {
  return (
    <div className='col-span-2 rounded-lg border text-card-foreground shadow-sm w-full max-w-xs bg-blue-500'>
      <div className='flex flex-col space-y-1.5 p-4'>
        <h3 className='text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-white'>Room Name</h3>
      </div>
      <div className='p-4 text-white'>
        <p>Click the button below to join the room.</p>
      </div>
      <div className='flex items-center p-4'>
        <Button className='bg-white text-blue-500 hover:bg-white hover:bg-opacity-75'>Join room</Button>
      </div>
    </div>
  )
}

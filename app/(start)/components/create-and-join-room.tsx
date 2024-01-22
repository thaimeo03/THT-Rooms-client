'use client'
import { getRoomsByHostId } from '@/apis/room.api'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'

export default function CreateAndJoinRoom() {
  // const createRoomMutation = useMutation({
  //   mutationFn: (hostId: string) => getRoomsByHostId(hostId),
  //   onSuccess: (data) => {
  //     console.log(data.message)
  //   }
  // })

  return (
    <div className=' flex flex-col gap-2 min-[400px]:flex-row'>
      <Button
        className='inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-emerald-500 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50'
        type='button'
      >
        Create Room
      </Button>
    </div>
  )
}

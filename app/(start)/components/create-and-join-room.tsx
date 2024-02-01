'use client'
import { createRoomApi } from '@/apis/room.api'
import { ROUTES } from '@/common/constants/routes.constant'
import { Button } from '@/components/ui/button'
import { ICreateRoom } from '@/interfaces/room.interface'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const roomDefault: ICreateRoom = {
  name: 'New room',
  color: '#50c878'
}

export default function CreateAndJoinRoom() {
  const router = useRouter()
  const createRoomMutation = useMutation({
    mutationFn: () => createRoomApi(roomDefault),
    onSuccess: () => {
      router.push(ROUTES.HOME)
    },
    onError: () => {
      console.log('error')
      router.push(ROUTES.LOGIN)
    }
  })

  const handleCreateRoom = () => {
    createRoomMutation.mutate()
  }

  return (
    <div className=' flex flex-col gap-2 min-[400px]:flex-row'>
      <Button
        className='inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-emerald-500 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50'
        type='button'
        onClick={handleCreateRoom}
      >
        Create Room
      </Button>
    </div>
  )
}

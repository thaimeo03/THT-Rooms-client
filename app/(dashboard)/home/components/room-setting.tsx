'use client'
import { deleteRoomApi } from '@/apis/room.api'
import useGetRooms from '@/common/hooks/useGetRooms'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'

interface RoomSettingProps {
  roomId: string
}

export default function RoomSetting({ roomId }: RoomSettingProps) {
  const { prefetchRooms } = useGetRooms()

  const deleteRoomMutation = useMutation({
    mutationFn: () => deleteRoomApi(roomId),
    onSuccess: () => {
      prefetchRooms()
    }
  })

  const handleDeleteRoom = () => {
    deleteRoomMutation.mutate()
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='cursor-pointer'>
          <DragHandleDots2Icon width={24} height={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className='cursor-pointer'>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={handleDeleteRoom} className='cursor-pointer'>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

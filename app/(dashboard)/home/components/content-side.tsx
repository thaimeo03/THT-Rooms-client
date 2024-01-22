'use client'
import useGetRooms from '@/common/hooks/useGetRooms'
import { BoxAddNew } from '.'
import BoxJoinRoom from './box-join-room'

export default function ContentSide() {
  const { data: resRooms, isSuccess } = useGetRooms()

  return (
    <div className='p-4 grid gap-2 grid-cols-10'>
      {isSuccess ? (
        resRooms.data.map((room) => <BoxJoinRoom key={room.id} room={room} />)
      ) : (
        <span className='text-red-500'>Loading...</span>
      )}
      <BoxAddNew />
    </div>
  )
}

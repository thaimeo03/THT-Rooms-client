import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { Roles } from '../enums/roles.enum'
import { getRoomsByHostIdApi } from '@/apis/room.api'
import { IRoomResponse } from '@/interfaces/room.interface'

export default function useGetRooms() {
  const { auth } = useContext(AuthContext) as AuthContextType
  const profile = auth.profile

  const { data, isSuccess } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => {
      if (profile.role === Roles.HOST) {
        return getRoomsByHostIdApi(profile.id)
      }
      // Handle get host id for user
    }
  })

  console.log(data)

  return {
    data: data as IRoomResponse,
    isSuccess
  }
}

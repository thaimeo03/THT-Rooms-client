import { AuthContext, AuthContextType } from '@/app/(dashboard)/components/auth-context-provider'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { Roles } from '../enums/roles.enum'
import { getRoomsByHostIdApi } from '@/apis/room.api'
import { IRoomsResponse } from '@/interfaces/room.interface'

export default function useGetRooms() {
  const { auth } = useContext(AuthContext) as AuthContextType
  const queryClient = useQueryClient()
  const profile = auth.profile

  const { data, isSuccess } = useQuery({
    queryKey: ['rooms'],
    queryFn: () => {
      return getRoomsByHostIdApi(profile.id)
      // Handle get host id for user
    }
  })

  const prefetchRooms = () => {
    queryClient.prefetchQuery({
      queryKey: ['rooms'],
      queryFn: () => {
        return getRoomsByHostIdApi(profile.id)
        // Handle get host id for user
      }
    })
  }

  return {
    data: data as IRoomsResponse,
    isSuccess,
    prefetchRooms
  }
}

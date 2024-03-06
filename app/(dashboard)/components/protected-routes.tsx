'use client'
import { useContext, useEffect } from 'react'
import { AuthContext, AuthContextType } from './auth-context-provider'
import { useQuery } from '@tanstack/react-query'
import { getProfileApi } from '@/apis/user.api'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/common/constants/routes.constant'
import { LoadingPage } from '.'
import { Roles } from '@/common/enums/roles.enum'

export default function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileApi
  })

  useEffect(() => {
    if (isSuccess) {
      console.log(auth.isAuth)
      return setAuth({
        isAuth: true,
        profile: data.data
      })
    }

    if (isError) {
      return redirect(ROUTES.LOGIN)
    }
  }, [isSuccess, isError])

  return auth.isAuth ? <>{children}</> : <LoadingPage />
}

'use client'
import { useContext, useEffect } from 'react'
import { AuthContext, AuthContextType } from './auth-context-provider'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/apis/user.api'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/common/constants/routes.constant'
import { LoadingPage } from '.'

export default function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  useEffect(() => {
    if (isSuccess) {
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

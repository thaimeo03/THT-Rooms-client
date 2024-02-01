'use client'
import { leaveHostApi } from '@/apis/user.api'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

const SwitchRoleProvider = ({ children }: { children: React.ReactNode }) => {
  const leaveHostMutation = useMutation({
    mutationFn: leaveHostApi
  })

  useEffect(() => {
    const handleUnload = () => {
      // handle later
      // leaveHostMutation.mutate()
    }

    window.addEventListener('unload', handleUnload)

    return () => {
      window.removeEventListener('unload', handleUnload)
    }
  }, [])

  return <>{children}</>
}

export default SwitchRoleProvider

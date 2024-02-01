'use client'
import { useEffect } from 'react'

const SwitchRoleProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem('role', 'guest')
    }

    window.addEventListener('unload', handleUnload)

    return () => {
      window.removeEventListener('unload', handleUnload)
    }
  }, [])

  return <>{children}</>
}

export default SwitchRoleProvider

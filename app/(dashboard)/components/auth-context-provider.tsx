'use client'
import { IProfile } from '@/interfaces/users.interface'
import { createContext, useState } from 'react'

interface IAuth {
  isAuth: boolean
  profile: IProfile
}

export interface AuthContextType {
  auth: IAuth
  setAuth: React.Dispatch<React.SetStateAction<IAuth>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<IAuth>({
    isAuth: false,
    profile: {} as IProfile
  })

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

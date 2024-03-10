'use client'

import { IRole } from '@/interfaces/role.interface'
import { createContext, useState } from 'react'

export interface RoleContextType {
  role: IRole | null
  setRole: React.Dispatch<React.SetStateAction<IRole | null>>
}

export const RoleContext = createContext<RoleContextType | null>(null)

export default function RoleContextProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<IRole | null>(null)

  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
}

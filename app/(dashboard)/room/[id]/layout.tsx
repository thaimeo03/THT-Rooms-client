import RoleContextProvider from './components/role-context-provider'

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return <RoleContextProvider>{children}</RoleContextProvider>
}

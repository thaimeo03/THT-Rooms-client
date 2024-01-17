import { ProtectedRoutes } from './components'

export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoutes>
      <>{children}</>
    </ProtectedRoutes>
  )
}

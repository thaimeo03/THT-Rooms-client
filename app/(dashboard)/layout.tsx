import Header from '@/components/ui/header'
import { ProtectedRoutes } from './components'

export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoutes>
      <div className='bg-neutral-100 dark:bg-neutral-900'>
        <div className='h-full'>
          <div className='border-b border-neutral-200 dark:border-neutral-700'>
            <div className='container'>
              <Header />
            </div>
          </div>
          <div className='relative h-[calc(100vh-4rem)]'>{children}</div>
        </div>
      </div>
    </ProtectedRoutes>
  )
}

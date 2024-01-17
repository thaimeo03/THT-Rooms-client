import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login'
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

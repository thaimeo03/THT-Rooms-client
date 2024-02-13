'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthContextProvider } from './(dashboard)/components'
import { ThemeProvider } from '@/components/ui/theme-provider'
import SwitchRoleProvider from '@/components/ui/switch-role-provider'
import SocketProvider from './(dashboard)/room/[id]/components/socket-provider'
import { ToastProvider } from '@radix-ui/react-toast'

const inter = Inter({ subsets: ['latin'] })

// Create a client
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SocketProvider>
          <QueryClientProvider client={queryClient}>
            <SwitchRoleProvider>
              <AuthContextProvider>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                  <ToastProvider>{children}</ToastProvider>
                </ThemeProvider>
              </AuthContextProvider>
            </SwitchRoleProvider>
          </QueryClientProvider>
        </SocketProvider>
      </body>
    </html>
  )
}

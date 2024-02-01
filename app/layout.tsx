'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthContextProvider } from './(dashboard)/components'
import { ThemeProvider } from '@/components/ui/theme-provider'
import SwitchRoleProvider from '@/components/ui/switch-role-provider'

const inter = Inter({ subsets: ['latin'] })

// Create a client
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SwitchRoleProvider>
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                {children}
              </ThemeProvider>
            </QueryClientProvider>
          </AuthContextProvider>
        </SwitchRoleProvider>
      </body>
    </html>
  )
}

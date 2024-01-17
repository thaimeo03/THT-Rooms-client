'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthContextProvider } from './(dashboard)/components'

const inter = Inter({ subsets: ['latin'] })

// Create a client
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}

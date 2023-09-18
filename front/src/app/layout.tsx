import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hero Tickets',
  description: 'Hero Tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className='h-screen'>
      <Header />
      <Sidebar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}

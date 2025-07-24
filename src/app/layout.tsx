import type { Metadata } from 'next'
import { TopNavBar } from '@/components/general/NavBar'
import './globals.css'

export const metadata: Metadata = {
  title: "Cynthia's Portfolio",
  description: 'Personal portfolio of Cynthia',
  icons: {
    icon: '/images/profile-logo.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <TopNavBar />
        {children}
      </body>
    </html>
  )
}

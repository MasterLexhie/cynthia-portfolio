import type { Metadata } from 'next'
import Image from 'next/image'
import { TopNavBar } from '@/components/general/NavBar'
import { BottomNavBar } from '@/components/general/BottomNavBar'
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
        <BottomNavBar />

        <button
          className={`flex justify-center items-center rounded-full font-bold text-[14px] sm:text-base cursor-pointer border border-[#9898982e] bg-white fixed sm:hidden right-8 bottom-24 z-50 w-[42px] h-[42px]`}
        >
          <span className='button-icon'>
            <Image
              src='/images/email-icon.svg'
              alt='icon'
              width={20}
              height={20}
            />
          </span>
        </button>
      </body>
    </html>
  )
}

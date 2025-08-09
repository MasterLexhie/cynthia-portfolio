import type { Metadata } from 'next'
import Image from 'next/image'
import { TopNavBar } from '@/components/general/NavBar'
import { BottomNavBar } from '@/components/general/BottomNavBar'
import './globals.css'
import Footer from '@/components/general/Footer'

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
      <body>
        <TopNavBar />
        {children}
        {/* <Footer /> */}
        <BottomNavBar />

        <a
          href='mailto:smilewithcynthia@gmail.com'
          rel='noopener noreferrer'
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
        </a>
        <div className='fixed bottom-0 w-full h-11 transition-all duration-300 ease-in-out]'>
          <div className='absolute inset-0 backdrop-blur-sm [mask:linear-gradient(to_top,black_0%,black_50%,transparent_100%)]'></div>
        </div>
      </body>
    </html>
  )
}

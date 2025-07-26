'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './Button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Works', href: '/works' }
]

export const BottomNavBar: React.FC = () => {
  const pathname = usePathname()
  const activeIndex = navLinks.findIndex((link) => link.href === pathname)

  const handleClick = () => alert("let's Talk")

  return (
    <nav className='fixed bottom-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-3rem)] sm:w-[calc(100%-8.5rem)] lg:max-w-[877px] rounded-full px-2 py-2 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 flex justify-between items-center glass-nav'>
      <ul className='relative flex w-full sm:w-[45%] justify-between items-center'>
        <div
          className='absolute top-0 left-0 h-full w-1/3 transition-transform duration-300 ease-in-out pointer-events-none'
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        >
          <div className='mx-2 h-full rounded-full bg-[#242424] transition-all' />
        </div>
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              className='w-1/3 flex justify-center relative z-10'
            >
              <Link
                href={link.href}
                className={`cursor-pointer text-[14px] sm:text-base block w-full text-center py-2 px-[17px] sm:py-2.5 sm:px-3.5 rounded-full font-semibold transition-colors duration-200 text-white`}
                scroll={false}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='hidden sm:block'>
        <Button
          text={"Let's Talk"}
          iconUrl='/images/email-icon.svg'
          variant='primary'
          textColor='text-black'
          handleClick={handleClick}
        />
      </div>
    </nav>
  )
}

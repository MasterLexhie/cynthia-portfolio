'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './Button'
import Image from 'next/image'

const navLinks = [
  {
    name: 'Home',
    href: '/',
    imageUrl: '/images/home-icon.svg',
    imageUrlActive: '/images/home-icon-solid.svg'
  },
  // {
  //   name: 'Projects',
  //   href: '/#projects',
  //   imageUrl: '/images/project-icon.svg',
  //   imageUrlActive: '/images/project-icon-solid.svg'
  // },
  {
    name: 'About',
    href: '/about',
    imageUrl: '/images/about-icon.svg',
    imageUrlActive: '/images/about-icon-solid.svg'
  },
  {
    name: 'Works',
    href: '/works',
    imageUrl: '/images/work-icon.svg',
    imageUrlActive: '/images/work-icon-solid.svg'
  }
]

export const BottomNavBar: React.FC = () => {
  const pathname = usePathname()
  const activeIndex = navLinks.findIndex((link) => link.href === pathname)

  return (
    <nav className='fixed bottom-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-3rem)] sm:w-[calc(100%-8.5rem)] lg:max-w-[877px] rounded-full px-2 py-2 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 flex justify-between items-center glass-nav'>
      <ul className='relative flex max-lg:flex-1 w-full lg:w-[45%] justify-between items-center'>
        <div
          className='absolute top-0 left-0 h-full w-1/3 transition-transform duration-300 ease-in-out pointer-events-none'
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        >
          <div className='mx-2 h-full rounded-full bg-[#242424] transition-all' />
        </div>
        {navLinks.map((link) => {
          const isActive = link.href === pathname
          return (
            <li
              key={link.name}
              className='w-1/3 flex justify-center items-center relative z-10 overflow-hidden'
            >
              <Link
                href={link.href}
                className={`group cursor-pointer text-[14px] sm:text-base flex items-center justify-center gap-2 w-full text-center py-3 px-[16px] sm:py-2.5 rounded-full  transition-colors duration-200 text-white`}
                scroll={true}
              >
                {isActive ? (
                  <div className='w-4 h-4'>
                    <Image
                      src={link.imageUrlActive}
                      alt='logo'
                      width={16}
                      height={16}
                      className='w-full h-full'
                      priority
                    />
                  </div>
                ) : (
                  <div className='w-4 h-4 group-hover:hidden transition-opacity duration-200'>
                    <Image
                      src={link.imageUrl}
                      alt='logo'
                      width={16}
                      height={16}
                      className='w-full h-full'
                      priority
                    />
                  </div>
                )}

                {isActive ? (
                  <div className='flex flex-col items-center justify-center h-full font-semibold'>
                    <span>{link.name}</span>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center h-full'>
                    <span className='transition-transform duration-300 ease-in-out group-hover:-translate-y-1'>
                      {link.name}
                    </span>
                    <div className='absolute bottom-1 w-1.5 h-1.5 rounded-full bg-white hidden group-hover:block group-hover:animate-in group-hover:slide-in-from-bottom-1 group-hover:fade-in group-hover:duration-300'></div>
                  </div>
                )}
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
          isLink={true}
          linkUrl='mailto:smilewithcynthia@gmail.com'
        />
      </div>
    </nav>
  )
}

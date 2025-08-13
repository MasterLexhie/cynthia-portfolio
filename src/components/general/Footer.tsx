'use client'
import Image from 'next/image'
import React from 'react'

interface SocialLink {
  name: string
  url: string
}

const socialLinks: SocialLink[] = [
  { name: 'Connect with me on X', url: 'https://x.com/Phoenix_XVII' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cynthia-osi-1207b6a9/'
  },
  { name: 'Instagram', url: 'https://www.instagram.com/phoenix.szn' },
  { name: 'Tiktok', url: 'https://www.tiktok.com/@designs_by_cynt' },
  { name: 'Behance', url: 'https://www.behance.net/839d7a1eCynthiaOsi' },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCzEWdXbDiZZvnpepKsamo2A'
  }
]

const Footer: React.FC = () => {
  return (
    <footer className='px-4 sm:px-[22px] pt-9 sm:pt-12 pb-40 border-t border-global-text-1/20'>
      <div className='flex flex-col gap-4 max-w-[1240px] mx-auto'>
        <div className='p-4 sm:p-6 md:p-8'>
          <div className='flex flex-wrap justify-center lg:justify-between items-center gap-8'>
            <div className='lg:max-w-[350px]'>
              <p className='text-[28px] sm:text-[32px] lg:text-[34px] leading-[120%] font-product-sans text-white text-center lg:text-start'>
                Let’s design the next big thing
              </p>
            </div>

            <div className='flex flex-wrap justify-center lg:justify-start items-center gap-2 text-sm sm:text-[22px] leading-[120%] text-global-3 font-product-sans max-w-[470px]'>
              {socialLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.url}
                    className='hover:text-[#E8E8E8] hover:underline transition-colors duration-200'
                  >
                    {link.name}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className='text-global-3'>/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className='p-4 sm:p-6 md:p-8 text-center text-global-3 text-sm sm:text-base leading-[120%] font-product-sans'>
          <div className='flex justify-center items-center gap-2'>
            <Image
              src='/images/img_vector.svg'
              alt=''
              aria-hidden
              className='w-4 h-4 sm:w-5 sm:h-5'
              width={16}
              height={16}
            />
            <p>2025 Cynthia Osi. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

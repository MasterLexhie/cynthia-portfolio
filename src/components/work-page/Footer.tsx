'use client'
import Image from 'next/image'
import React from 'react'

interface SocialLink {
  name: string
  url: string
}

const socialLinks: SocialLink[] = [
  { name: 'Follow me on X', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'Tiktok', url: '#' },
  { name: 'Behance', url: '#' },
  { name: 'Youtube', url: '#' }
]

const Footer: React.FC = () => {
  return (
    <footer className='px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 py-6 sm:py-8 md:py-10'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='bg-[#242424] border border-gray-600 rounded-lg p-4 sm:p-6 md:p-8'>
          <div className='flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8'>
            {/* Copyright */}
            <div className='flex items-center space-x-2 sm:space-x-3'>
              <Image
                src='/images/img_vector.svg'
                alt='Copyright'
                className='w-4 h-4 sm:w-5 sm:h-5'
                width={16}
                height={16}
              />
              <span className='text-base sm:text-lg md:text-xl lg:text-2xl text-global-3 font-product-sans'>
                2025 Cynthia Osi.
              </span>
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-global-3 font-product-sans'>
              {socialLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.url}
                    className='hover:text-white transition-colors duration-200'
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
      </div>
    </footer>
  )
}

export default Footer

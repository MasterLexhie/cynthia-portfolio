'use client'
import Image from 'next/image'
import React from 'react'

interface SocialLink {
  name: string
  url: string
}

const socialLinks: SocialLink[] = [
  { name: 'Follow me on X', url: '#' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cynthia-osi-1207b6a9/'
  },
  { name: 'Instagram', url: 'https://www.instagram.com/phoenix.szn' },
  { name: 'Tiktok', url: '#' },
  { name: 'Behance', url: '#' },
  { name: 'Youtube', url: '#' }
]

const Footer: React.FC = () => {
  return (
    <footer className='px-4 sm:px-[22px] pb-40'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='bg-[#242424] border border-dashed border-gray-600 rounded-lg p-4 sm:p-6 md:p-8'>
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
              <span className='text-sm sm:text-[22px] leading-[120%] text-global-3 font-product-sans'>
                2025 Cynthia Osi.
              </span>
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap items-center gap-2 text-sm sm:text-[22px] leading-[120%] text-global-3 font-product-sans'>
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

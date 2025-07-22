'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/general/Button'

const HeroSection: React.FC = () => {
  const handleClick = () => alert("let's Talk")
  return (
    <section className='pt-[22px] sm:pt-6 md:pt-[74] pb-[19px] sm:pb-[47px] md:pb-[48px]'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
        <div className='mb-8 md:mb-[38px] w-[120] sm:w-[170px] md:w-[200]'>
          <Image
            src='/profile-logo.svg'
            alt='cynthia in animated form'
            width={120}
            height={120}
            className='w-full h-full'
          />
        </div>
        <div className='flex flex-col gap-3.5 sm:gap-[22px] md:gap-8 mb-3.5 sm:mb-[22px] md:mb-8'>
          <h2 className='text-white font-bold text-base sm:text-[22px] md:text-2xl'>
            Product designer based in Nigeria
          </h2>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] leading-[160%]'>
            Open to full-time mid-level roles in product design, remote or
            hybrid as well as freelance opportunities.
          </p>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] mb-[11px] leading-[160%]'>
            I’m a product designer with four years of experience crafting
            user-centered digital experiences. I also illustrate, which adds
            visual storytelling to my work. I also bring designs to life through
            vibe code turning Figma files into expressive websites with Lovable.
          </p>
        </div>
        <div className='flex gap-3'>
          <Button
            text={"Let's Talk"}
            iconUrl='/email-icon.svg'
            variant='primary'
            textColor='text-black'
            handleClick={handleClick}
          />
          <Button
            text={'Download Resume'}
            iconUrl='/download-icon.svg'
            variant='secondary'
            textColor='text-white'
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/general/Button'

const HeroSection: React.FC = () => {
  return (
    <section className='pt-[22px] sm:pt-6 md:pt-[74] pb-[41px] sm:pb-[79px] md:pb-[122px]'>
      <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto'>
        <div className='mb-8 md:mb-[38px] w-[120] sm:w-[170px] md:w-[200]'>
          <Image
            src='/images/profile-logo.svg'
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
            iconUrl='/images/email-icon.svg'
            variant='primary'
            textColor='text-black'
            isLink={true}
            linkUrl='mailto:smilewithcynthia@gmail.com'
          />
          <Button
            text={'Download Resume'}
            iconUrl='/images/download-icon.svg'
            variant='secondary'
            textColor='text-white'
            isLink={true}
            linkUrl='https://docs.google.com/document/d/1JgUYR9qE-IclILxOALW2r0GJi4cA06UaFzjNcfQwdGM/mobilebasic?fbclid=PAQ0xDSwLzXtJleHRuA2FlbQIxMAABpwRDREckNsfT5kN4FgqSJv4a7-ASFCzw2exDDYgSfX97atFhB-rzi1dNrzzg_aem_jjqKMv-Q7u8AWDToz-8iWg'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import React from 'react'
import Image from 'next/image'

const AboutMeSection: React.FC = () => {
  return (
    <section className='pt-8 sm:pt-12 lg:pt-[108px] pb-8 sm:pb-12 lg:pb-[98px]'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
        <h1 className='text-global-2 font-product-sans font-bold text-2xl sm:text-3xl lg:text-[32px] leading-[39px] mb-6 sm:mb-8 lg:mb-[28px]'>
          About me
        </h1>

        <div className='flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[38px]'>
          <div className='flex-1 space-y-4 sm:space-y-5 lg:space-y-[20px]'>
            <h2 className='text-global-2 font-product-sans font-bold text-xl sm:text-2xl lg:text-[24px] leading-[30px]'>
              Hi, I am Cynthia
            </h2>

            <p className='text-global-1 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[28px]'>
              I blend clarity with character, designing products that move
              businesses forward and make users feel like they were truly
              thought of.
            </p>

            <p className='text-global-1 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[28px]'>
              I am excited when I am learning, creating, and adding to
              worthwhile initiatives. I enjoy creating top-notch products
              through design.
            </p>

            <p className='text-global-1 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[28px]'>
              You can find me watching movies, giving movie reviews on YouTube,
              tweeting, texting and surfing the internet when I am not in front
              of a laptop.
            </p>

            <p className='text-global-1 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[22px]'>
              Let us build together
            </p>
          </div>

          <div className='w-full lg:w-[42%] flex justify-center lg:justify-end'>
            <Image
              src='/images/img_frame_1948755270.png'
              alt='Cynthia Osi'
              width={400}
              height={480}
              className='w-full object-contain max-h-[496px] rounded-[12px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection

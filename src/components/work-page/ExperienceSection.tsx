'use client'
import { workExperiences } from '@/data/workExperience'
import React from 'react'

const ExperienceSection: React.FC = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto'>
        {/* Header */}
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-global-2 mb-2 sm:mb-3 md:mb-4 font-product-sans'>
            Works
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-global-1 font-product-sans'>
            Here are some of the places I have worked
          </p>
        </div>

        {/* Work Experience List */}
        <div className='space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16'>
          {workExperiences.map((work) => (
            <div key={work.id} className='relative transition-all duration-300'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20'>
                {/* Company Info */}
                <div className='space-y-2 sm:space-y-3 md:space-y-4'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-global-2 font-product-sans'>
                      {work.company}
                    </h2>
                  </div>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl text-global-1 font-product-sans'>
                    {work.location}
                  </p>
                </div>

                {/* Position Info */}
                <div className='space-y-3 sm:space-y-4 md:space-y-6'>
                  <div className='space-y-1 sm:space-y-2'>
                    <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-global-2 font-product-sans'>
                      {work.position}
                    </h3>
                    <p className='text-sm sm:text-base md:text-lg text-global-1 font-product-sans'>
                      {work.duration}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className='space-y-3 sm:space-y-4'>
                    {work.responsibilities.map((responsibility, index) => (
                      <div
                        key={index}
                        className='flex items-start space-x-2 sm:space-x-3'
                      >
                        <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-2 sm:mt-3.5 flex-shrink-0'></div>
                        <p className='text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-loose text-global-1 font-product-sans'>
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

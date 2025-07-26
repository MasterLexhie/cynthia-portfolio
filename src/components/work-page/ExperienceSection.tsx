'use client'
import { workExperiences } from '@/data/workExperience'
import React from 'react'

const ExperienceSection: React.FC = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto'>
        {/* Header */}
        <div className='mb-[22px] sm:mb-8 lg:mb-4'>
          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-global-2 mb-3 md:mb-2.5 font-product-sans'>
            Works
          </h1>
          <p className='text-sm leading-[140%] sm:text-lg lg:text-[22px] lg:leading-[120%] text-global-1 font-product-sans'>
            Here are some of the places I have worked
          </p>
        </div>

        {/* Work Experience List */}
        <div className='space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-16'>
          {workExperiences.map((work) => (
            <div key={work.id} className='relative transition-all duration-300'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {/* Company Info */}
                <div className='space-y-2 sm:space-y-3 md:space-y-4'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <h2 className='text-base sm:text-[22px] sm:leading-[120%] lg:text-[26px] font-bold text-global-2 font-product-sans'>
                      {work.company}
                    </h2>
                  </div>
                  <p className='text-sm sm:text-lg text-global-1 font-product-sans'>
                    {work.location}
                  </p>
                </div>

                {/* Position Info */}
                <div className='space-y-3 sm:space-y-4 md:space-y-6'>
                  <div className='space-y-1 sm:space-y-2'>
                    <h3 className='text-[15px] sm:text-xl lg:text-[22px] font-bold text-global-2 font-product-sans'>
                      {work.position}
                    </h3>
                    <p className='text-sm sm:text-base text-global-1 font-product-sans'>
                      {work.duration}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <ul className='space-y-3 sm:space-y-4 pl-4 list-disc'>
                    {work.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className='text-global-1 space-x-2 sm:space-x-3'
                      >
                        <span className='text-sm sm:text-lg leading-relaxed sm:leading-relaxed md:leading-loose font-product-sans'>
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
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

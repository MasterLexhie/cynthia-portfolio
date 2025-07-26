'use client'
import React from 'react'

interface Education {
  id: string
  institution: string
  location: string
  degree: string
  duration: string
}

const education: Education = {
  id: 'university-benin',
  institution: 'University of Benin',
  location: 'Benin-city, Edo State.',
  degree: 'Political Science and Public Administration',
  duration: '2014 - 2018'
}

const EducationSection: React.FC = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto'>
        <div className='mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
          <h2 className='text-xl sm:text-2xl lg:text-[32px] font-bold text-global-2 mb-[22px] sm:mb-8 font-product-sans'>
            Education
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20'>
            {/* Institution Info */}
            <div className='space-y-2 sm:space-y-3'>
              <h3 className='text-base sm:text-[22px] lg:text-[26px] font-bold text-global-2 font-product-sans'>
                {education.institution}
              </h3>
              <p className='text-sm sm:text-lg text-global-1 font-product-sans'>
                {education.location}
              </p>
            </div>

            {/* Degree Info */}
            <div className='space-y-1 sm:space-y-2'>
              <h4 className='text-[15px] sm:text-xl lg:text-[22px] font-bold text-global-2 font-product-sans'>
                {education.degree}
              </h4>
              <p className='text-sm sm:text-base text-global-1 font-product-sans'>
                {education.duration}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

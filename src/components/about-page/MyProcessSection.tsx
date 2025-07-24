import Image from 'next/image'
import React from 'react'

const processSteps = [
  {
    id: 1,
    title: 'Concept Development',
    description:
      'I create wireframes and prototypes to visualize the user journey, allowing for early testing before development.',
    icon: '/images/img_carbon_dot_mark.svg'
  },
  {
    id: 2,
    title: 'Research & Testing',
    description:
      'I use different research and testing methods to understand user needs and validate any potential design changes.',
    icon: '/images/img_carbon_dot_mark.svg'
  },
  {
    id: 3,
    title: 'Style guide',
    description:
      'I architect cohesive libraries of reusable components, providing a foundation for a consistent visual experience.',
    icon: '/images/img_carbon_dot_mark.svg'
  },
  {
    id: 4,
    title: 'Iteration',
    description:
      'My iterative approach ensures that every update reflects real user needs and preferences, by creating a product that truly resonates.',
    icon: '/images/img_carbon_dot_mark.svg'
  }
]

const MyProcessSection: React.FC = () => {
  return (
    <section className='pb-8 sm:pb-12 lg:pb-[146px]'>
      <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto'>
        <h2 className='text-global-2 font-product-sans font-bold text-xl sm:text-2xl lg:text-[28px] leading-[34px] mb-[22px] sm:mb-8 lg:mb-[72px]'>
          My Process
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-[22px] lg:gap-[32px]'>
          {processSteps.map((step) => (
            <div key={step.title} className='flex flex-col gap-3'>
              <div className={`flex items-center gap-1`}>
                <Image
                  src={step.icon}
                  alt=''
                  className='w-[20px] h-[20px]'
                  width={24}
                  height={24}
                />
                <h3 className='text-global-2 font-product-sans font-bold text-base sm:text-xl lg:text-[24px] leading-[30px]'>
                  {step.title}
                </h3>
              </div>
              <p className='text-global-1 font-product-sans font-normal text-[14px] leading-[150%] sm:text-lg  sm:leading-[160%]'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProcessSection

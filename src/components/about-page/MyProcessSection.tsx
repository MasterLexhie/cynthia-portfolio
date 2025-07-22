import Image from 'next/image'
import React from 'react'

const languageData = [
  { language: 'English', proficiency: 'Advanced' },
  { language: 'French', proficiency: 'Beginner' }
]

const expertise = [
  'User Research',
  'Design Thinking',
  'Usability Testing',
  'Information Architecture',
  'UI Design',
  'Prototyping',
  'Visual Design',
  'Interaction Design',
  'Vibe-coding',
  'Ux Design',
  'Illustration',
  'Style Guide'
]

const processSteps = [
  {
    title: 'Concept Development',
    description:
      'I create wireframes and prototypes to visualize the user journey, allowing for early testing before development.',
    icon: '/images/img_carbon_dot_mark.svg',
    iconClass: 'w-[24px] h-[24px] mt-0.5',
    headingClass: '',
    containerClass: 'items-start',
    spaceClass: 'space-y-1.5 lg:space-y-[6px]'
  },
  {
    title: 'Research & Testing',
    description:
      'I use different research and testing methods to understand user needs and validate any potential design changes.',
    icon: '/images/img_carbon_dot_mark.svg',
    iconClass: 'w-[24px] h-[24px] mt-0.5',
    headingClass: '',
    containerClass: 'items-start',
    spaceClass: 'space-y-1.5 lg:space-y-[6px]'
  },
  {
    title: 'Style guide',
    description:
      'I architect cohesive libraries of reusable components, providing a foundation for a consistent visual experience.',
    icon: '/images/img_carbon_dot_mark.svg',
    iconClass: 'w-[24px] h-[24px] mt-0.5',
    headingClass: '',
    containerClass: 'items-start',
    spaceClass: 'space-y-1.5 lg:space-y-[6px]'
  },
  {
    title: 'Iteration',
    description:
      'My iterative approach ensures that every update reflects real user needs and preferences, by creating a product that truly resonates.',
    icon: '/images/img_carbon_dot_mark.svg',
    iconClass: 'w-[24px] h-[24px]',
    headingClass: '',
    containerClass: 'items-center',
    spaceClass: 'space-y-2 lg:space-y-[8px]'
  }
]

const MyProcessSection: React.FC = () => {
  return (
    <section className='pb-8 sm:pb-12 lg:pb-[146px]'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
        <h2 className='text-global-2 font-product-sans font-bold text-2xl sm:text-3xl lg:text-[28px] leading-[34px] mb-8 sm:mb-12 lg:mb-[70px]'>
          My Process
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-[180px] lg:gap-y-[66px]'>
          {processSteps.map((step) => (
            <div key={step.title} className={step.spaceClass}>
              <div className={`flex ${step.containerClass} gap-2`}>
                <Image
                  src={step.icon}
                  alt=''
                  className={step.iconClass}
                  width={24}
                  height={24}
                />
                <h3 className='text-global-2 font-product-sans font-bold text-xl sm:text-2xl lg:text-[24px] leading-[30px]'>
                  {step.title}
                </h3>
              </div>
              <p className='text-global-1 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[28px]'>
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

'use client'
import React from 'react'

interface WorkExperience {
  id: string
  company: string
  location: string
  position: string
  duration: string
  responsibilities: string[]
}

const workExperiences: WorkExperience[] = [
  {
    id: 'savetown',
    company: 'Savetown',
    location: 'Lagos, Nigeria',
    position: 'Product Designer',
    duration: 'Oct 2024 - Present',
    responsibilities: [
      'Created logical design concepts, plans, for Website design, admin panel, mobile application, web app, and tablet device.',
      'Designed savings plan wallet features which includes the savetown wallet and group savings plan with dollar savings for all screen sizes.',
      'Crafted a transfer payment method that would use a third part app fincra for payment deposit on all device sizes.',
      'Designed a savings calculator for users to get an estimate of how much to save for a house of their choice, and a referral invite feature for interest and bonus for users that invite friends on the platform, alongside an email invite method.',
      'Spearheaded efforts ensuring seamless compatibility across web, mobile and tablet devices.',
      'Improving design iterations and overall performance of the product features.'
    ]
  },
  {
    id: 'tobinrin',
    company: 'Tobinrin',
    location: 'Lagos, Nigeria',
    position: 'Product Designer',
    duration: 'Dec 2023 - Aug 2024',
    responsibilities: [
      'User flow journey map was drafted for the product, with an outcome of 30% drop-in design creation time which enhanced quicker iteration for high-quality user interfaces.',
      'Set up a Style Guide that facilitated the design journey, leading to a decline of 50% workload.',
      'Implemented a comprehensive user research plan, conducting 20+ usability tests and gathering feedback to refine design concepts, resulting in a 50% increase in user engagement and a 30% decrease in bounce rate.',
      'Designed components that will enhance 70% of the design process.',
      'Utilizing prototype tools, established designs were linked and connected. Resulting to 80% increase on the user experience'
    ]
  },
  {
    id: 'street-market',
    company: '24th Street Market',
    location: 'Lagos, Nigeria',
    position: 'Product Designer',
    duration: 'Apr 2022 - May 2023',
    responsibilities: [
      'Carried and designed User flow journey for the website resulting to 20% user engagement.',
      'Spearheaded the creation of a comprehensive library of design components, resulting in a 50% reduction in design production time and a quicker iteration and delivery of high-quality user.',
      'Analyzing results to feasibility tests through regular project reviews, improving project efficiency by 15%.',
      'Coordinated a team of 3 designers, 3 QA on the website flows, resulting in a 30% reduction in development time.',
      'Evaluated new design ideas or concepts, leading to a 25% improvement in design innovation.',
      'Designed components that will enhance 70% of the design process.',
      'Worked closely with 4 developers in Website deployment phase, ensuring a seamless user experience.'
    ]
  },
  {
    id: 'medya-estate',
    company: 'Medya Estate',
    location: 'Istabul, Turkey',
    position: 'UI/UX Design Intern',
    duration: 'Oct 2022 - Jan 2023',
    responsibilities: [
      'Redesigned the Medya Estate Website Landing Page, leading to a 15% increase in user interaction.',
      "Collaborated with the website's developer to reform the entire Medya Website, resulting to 40% more user friendly interaction.",
      'Created logical design concepts, plans, and prototypes, contributing to a 10% improvement in user satisfaction.',
      'Developed comprehensive project plans and timelines to ensure efficient project delivery, resulting in a 20% reduction in overall project timeline and a 15% increase in team productivity.',
      'Analyze fresh design thoughts and insights from users, integrating valuable feedback into the design process'
    ]
  }
]

const ExperienceSection: React.FC = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
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

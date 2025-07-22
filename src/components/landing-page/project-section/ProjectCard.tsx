import React from 'react'
import Image from 'next/image'
import ProjectTag from './ProjectTag'

const ProjectCard: React.FC = () => {
  return (
    <div className='bg-[#1C1C1C] border border-[#242424] flex flex-col gap-6 rounded-3xl pt-2 pb-3 px-3.5'>
      <div className='rounded-[12px]'>
        <Image
          src='/project-image.png'
          alt='project-image'
          width={309}
          height={166}
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-3 mb-[24px]'>
          <h3 className='text-white font-bold text-[18px] sm:text-[22px] leading-[150%]'>
            Savetown Fintech Housing
          </h3>
          <div className='flex gap-2'>
            <ProjectTag tag='UI Design' />
            <ProjectTag tag='UX Design' />
            <ProjectTag tag='Mobile App' />
          </div>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] leading-[160%]'>
            A homeownership cooperative offering access to homeownership through
            structured savings plans, mortgage options, and financial advisory
            services.
          </p>
        </div>
        <button className='flex items-center gap-2 self-end'>
          <span className='text-white font-bold text-[14px] sm:text-[18px] lading-[160%]'>
            Read Case study
          </span>
          <span className='button-icon w-[20px] h-[20px]'>
            <Image
              src='/arrow-up-right.svg'
              alt='icon'
              width={20}
              height={20}
              className='w-full h-full'
            />
          </span>
        </button>
      </div>
    </div>
  )
}

export default function ProductCardList() {
  return <ProjectCard />
}

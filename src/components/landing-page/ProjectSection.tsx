'use client'

import React from 'react'
import ProductCard from './project-section/ProjectCard'
import { Button } from '../general/Button'
import { projectList } from '@/data/projects'

const ProjectSection: React.FC = () => {
  return (
    <section id='projects' className='pb-40'>
      <div className='max-w-[840px] px-[22px] sm:px-[66px] lg:px-[22px] mx-auto'>
        <div className='flex flex-col gap-2.5'>
          <h2 className='font-bold text-[20px] sm:text-[24] md:text-[32px] text-white'>
            Projects
          </h2>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] md:text-[22px]'>
            A couple of selected works
          </p>
        </div>
        <div>
          <div className='grid gap-4 py-8'>
            {projectList.map((project) => (
              <ProductCard key={project.id} project={project} />
            ))}
          </div>

          <div className='flex justify-center'>
            <Button
              text={'Discover more projects'}
              iconUrl='/images/arrow-up-right.svg'
              iconPosition='right'
              variant='secondary'
              textColor='text-white'
              isLink={true}
              linkUrl='https://www.behance.net/839d7a1eCynthiaOsi'
              target='_blank'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

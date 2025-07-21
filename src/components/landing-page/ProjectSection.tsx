'use client'

import React from 'react'
import ProductCardList from './project-section/ProjectCard'
import { Button } from '../general/Button'

const ProjectSection = () => {
  const handleClick = () => alert("let's Talk")

  return (
    <section className='pb-[160px]'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
        <div className='flex flex-col gap-2.5'>
          <h2 className='font-bold text-[20px] sm:text-[24] md:text-[32px] text-white'>
            Projects
          </h2>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] md:text-[22px]'>
            A couple of selected works
          </p>
        </div>
        <div>
          <div className='grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] md:[grid-template-columns:repeat(auto-fit,minmax(400px,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(518px,1fr))] gap-x-3.5 gap-y-8 py-8'>
            <ProductCardList />
            <ProductCardList />
            <ProductCardList />
          </div>
          <div className='flex justify-center'>
            <Button
              text={'Discover more projects'}
              iconUrl='/arrow-up-right.svg'
              iconPosition='right'
              variant='secondary'
              textColor='text-white'
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

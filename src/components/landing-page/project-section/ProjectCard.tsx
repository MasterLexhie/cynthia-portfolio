import React from 'react'
import Image from 'next/image'
import ProjectTag from './ProjectTag'
import { IProjectList } from '@/data/projects'

interface IProjectCard {
  project: IProjectList
}

const determineCTAText = (project: IProjectList) => {
  let text = ''
  if (project.projectType === 'case_study') {
    text = 'View Case study'
  }
  if (project.projectType === 'live_site') {
    text = 'Visit Site'
  }
  if (project.projectType === 'live_soon') {
    text = 'Live Soon'
  }
  if (project.projectType === 'post') {
    text = 'View Post'
  }
  if (project.projectType === 'ui_design') {
    text = 'View Details'
  }

  return text
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const ctaText = determineCTAText(project)

  const handleClick = () => {
    if (project.projectType === 'case_study') {
      console.log({ title: project.title, type: project.projectType })
    }
    if (project.projectType === 'live_site') {
      console.log({ title: project.title, type: project.projectType })
    }
    if (project.projectType === 'live_soon') {
      console.log({ title: project.title, type: project.projectType })
    }
    if (project.projectType === 'post') {
      console.log({ title: project.title, type: project.projectType })
    }
    if (project.projectType === 'ui_design') {
      console.log({ title: project.title, type: project.projectType })
    }
  }

  return (
    <div className='bg-[#1C1C1C] border border-[#242424] flex flex-col gap-6 rounded-3xl pt-2 pb-3 px-3.5'>
      <div className='rounded-[12px]'>
        <Image
          src={`/images/${project.imageSrc}`}
          alt='project-image'
          width={309}
          height={166}
          className='w-full'
        />
      </div>
      <div className='flex flex-col h-full'>
        <div className='flex flex-col gap-3 mb-4'>
          <h3 className='text-white font-bold text-[18px] sm:text-[22px] leading-[150%]'>
            {project.title}
          </h3>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag, index) => (
              <ProjectTag key={index} tag={tag} />
            ))}
          </div>
          <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] leading-[160%]'>
            {project.description}
          </p>
        </div>
        {project.projectType !== 'illustration' &&
          (project.projectType === 'live_site' && project.redirectLink ? (
            <a
              href={project.redirectLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 self-end cursor-pointer  mt-auto'
            >
              <span className='text-white font-bold text-[14px] sm:text-[18px] lading-[160%]'>
                {ctaText}
              </span>
              <span className='button-icon w-[20px] h-[20px]'>
                <Image
                  src='/images/arrow-up-right.svg'
                  alt='icon'
                  width={20}
                  height={20}
                  className='w-full h-full'
                />
              </span>
            </a>
          ) : (
            <button
              className='flex items-center gap-2 self-end cursor-pointer  mt-auto'
              onClick={handleClick}
            >
              <span className='text-white font-bold text-[14px] sm:text-[18px] lading-[160%]'>
                {ctaText}
              </span>
              <span className='button-icon w-[20px] h-[20px]'>
                <Image
                  src='/images/arrow-up-right.svg'
                  alt='icon'
                  width={20}
                  height={20}
                  className='w-full h-full'
                />
              </span>
            </button>
          ))}
      </div>
    </div>
  )
}

export default ProjectCard

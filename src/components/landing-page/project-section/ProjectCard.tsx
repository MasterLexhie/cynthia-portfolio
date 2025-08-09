import React, { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import ProjectTag from './ProjectTag'
import ProjectModal from '../../modals/ProjectModal'
import { IProjectList } from '@/data/projects'

interface IProjectCard {
  project: IProjectList
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ctaText = useMemo(() => {
    if (!project) return ''

    const textMap: Record<string, string> = {
      case_study: 'View Case study',
      live_site: 'Visit Site',
      live_soon: 'Live Soon',
      post: 'View Post',
      ui_design: 'View Details'
    }

    return textMap[project.projectType] || ''
  }, [project])

  const handleClick = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <button
        className='bg-[#1C1C1C] border border-[#242424] flex flex-col gap-6 rounded-3xl pt-2 pb-3 px-3.5 cursor-pointer'
        onClick={handleClick}
      >
        <div className='rounded-[12px] h-full'>
          <Image
            src={`/images/project-images/${project.imageSrc[0]}`}
            alt='project-image'
            width={309}
            height={166}
            className='w-full object-cover'
          />
        </div>
        <div className='flex flex-col h-full'>
          <div className='flex flex-col gap-3 mb-4'>
            <h3 className='text-white font-bold text-[18px] sm:text-[22px] leading-[150%] text-left'>
              {project.title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, index) => (
                <ProjectTag key={index} tag={tag} />
              ))}
            </div>
            <p className='text-[#B5B5B5] font-normal text-[14px] sm:text-[18px] leading-[160%] text-left'>
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
              <p className='flex items-center gap-2 self-end  mt-auto'>
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
              </p>
            ))}
        </div>
      </button>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={project}
      />
    </>
  )
}

export default React.memo(ProjectCard)

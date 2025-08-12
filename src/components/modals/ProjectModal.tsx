'use client'
import React from 'react'
import Image from 'next/image'
import Modal from '@/components/general/Modal'
import ProjectTag from '@/components/landing-page/project-section/ProjectTag'
import { IProjectList } from '@/data/projects'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project?: IProjectList
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project
}) => {
  if (!project) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className='flex flex-col gap-8 sm:gap-[38px] lg:gap-[42px]'
        role='document'
      >
        <div className='flex flex-col gap-3 sm:gap-[13px] lg:gap-3.5'>
          <h2
            id='modal-title'
            className='text-white font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[150%] sm:leading-[150%]'
          >
            {project.title}
          </h2>

          <div
            className='flex flex-wrap gap-x-1.5 gap-y-3 sm:gap-x-2'
            role='list'
            aria-label='Project tags'
          >
            {project.tags.map((tag, index) => (
              <div key={index} role='listitem'>
                <ProjectTag tag={tag} />
              </div>
            ))}
          </div>
        </div>

        {project.imageSrc && project.imageSrc.length > 0 && (
          <div className='space-y-4'>
            <div className='rounded-[12px] overflow-hidden max-h-[711px]'>
              <Image
                src={`/images/project-images${project.imageSrc[0]}`}
                alt={`${project.title} project image`}
                width={800}
                height={400}
                className='w-full h-auto'
                priority={false}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 840px'
              />
            </div>

            {/* {project.imageSrc.length > 1 && (
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {project.imageSrc.slice(1).map((image, index) => (
                  <div key={index} className='rounded-[8px] overflow-hidden'>
                    <Image
                      src={`images/project-images${image}`}
                      alt={`${project.title} project image ${index + 2}`}
                      width={300}
                      height={200}
                      className='w-full h-auto'
                    />
                  </div>
                ))}
              </div>
            )} */}
          </div>
        )}

        <div className='grid lg:grid-cols-2 gap-3.5 sm:gap-[18px] lg:gap-6 border border-dashed border-[#5C5C5C] rounded-3xl py-6 sm:py-8 px-5 sm:px-6'>
          {project.title && project.description && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#B5B5B5] text-base sm:text-xl leading-[120%]'>
                About
              </h3>
              <p className='text-white font-bold text-sm sm:text-lg leading-[160%]'>
                {project.description}
              </p>
            </div>
          )}

          {project.role && project.role.length > 0 && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#B5B5B5] text-base sm:text-xl leading-[120%]'>
                Role
              </h3>
              <p className='text-white font-bold text-sm sm:text-lg leading-[160%]'>
                {project.role.join(', ')}
              </p>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#B5B5B5] text-base sm:text-xl leading-[120%]'>
                Tools
              </h3>
              <p className='text-white font-bold text-sm sm:text-lg leading-[160%]'>
                {project.tools.join(', ')}
              </p>
            </div>
          )}

          {project.team && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#B5B5B5] text-base sm:text-xl leading-[120%]'>
                Team
              </h3>
              <p className='text-white font-bold text-sm sm:text-lg leading-[160%]'>
                {project.team}
              </p>
            </div>
          )}

          {project.website && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-[#B5B5B5] text-base sm:text-xl leading-[120%]'>
                Website
              </h3>
              <a
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white font-bold text-sm sm:text-lg leading-[160%] flex items-center'
              >
                <span>{project.website}</span>
                <Image
                  src='/images/arrow-up-right.svg'
                  alt=''
                  width={20}
                  height={20}
                  className='w-4 h-4'
                  aria-hidden='true'
                />
              </a>
            </div>
          )}
        </div>

        {project.intro && (
          <div className='flex flex-col gap-3.5 sm:gap-4'>
            <h3 className='text-white font-bold text-[22px] leading-[120%] sm:text-2xl'>
              Intro
            </h3>
            <p className='text-[#B5B5B5] font-normal text-sm sm:text-lg leading-[160%] whitespace-pre-line'>
              {project.intro}
            </p>
          </div>
        )}

        {project.imageSrc && project.imageSrc.length > 1 && (
          <div className='space-y-4'>
            <div className='rounded-[12px] overflow-hidden max-h-[711px]'>
              <Image
                src={`/images/project-images${project.imageSrc[1]}`}
                alt={`${project.title} project image`}
                width={800}
                height={400}
                className='w-full h-auto'
                priority={false}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 840px'
              />
            </div>
          </div>
        )}

        {project.whatWeDeliver && project.whatWeDeliver.length > 0 && (
          <div className='flex flex-col gap-3.5 sm:gap-4'>
            <h3 className='text-white font-bold text-xl sm:text-[22px]'>
              What We Were Tasked to Deliver
            </h3>
            <ul className='list-disc pl-4'>
              {project.whatWeDeliver.map((item, index) => (
                <li
                  key={index}
                  className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.objectives && (
          <div className='flex flex-col gap-3.5 sm:gap-4'>
            <h3 className='text-white font-bold text-[22px] mb-2 leading-[120%] sm:text-2xl'>
              Objective & Features
            </h3>

            {project.objectives.primary &&
              project.objectives.primary.length > 0 && (
                <div className='flex flex-col gap-3.5 sm:gap-4'>
                  <h4 className='text-white font-bold text-xl sm:text-[22px]'>
                    Primary Objective
                  </h4>
                  <ul className='list-disc pl-4'>
                    {project.objectives.primary.map((objective, index) => (
                      <li
                        key={index}
                        className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                      >
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {project.objectives.secondary &&
              project.objectives.secondary.length > 0 && (
                <div className='flex flex-col gap-3.5 sm:gap-4'>
                  <h4 className='text-white font-bold text-xl sm:text-[22px]'>
                    Secondary Objectives
                  </h4>
                  <ul className='list-disc pl-4'>
                    {project.objectives.secondary.map((objective, index) => (
                      <li
                        key={index}
                        className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                      >
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {project.objectives.design &&
              project.objectives.design.length > 0 && (
                <div className='flex flex-col gap-3.5 sm:gap-[22px]'>
                  {project.objectives.design.map((design, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                      {design.title && (
                        <h5 className='text-white font-bold text-base sm:text-xl leading-[120%]'>
                          {`${index + 1}. ${design.title}`}
                        </h5>
                      )}
                      {design.description && (
                        <p className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'>
                          {design.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
          </div>
        )}

        {project.myProcess && project.myProcess.length > 0 && (
          <div className='flex flex-col gap-8'>
            <h3 className='text-white font-bold text-xl sm:text-2xl leading-[120%]'>
              My Process
            </h3>
            <div className='flex flex-col gap-3.5 sm:gap-[22px]'>
              {project.myProcess.map((process, index) => (
                <div key={index} className='flex flex-col gap-3'>
                  {process.title && (
                    <h4 className='text-white font-bold text-base sm:text-xl leading-[120%]'>
                      {`${index + 1}. ${process.title}`}
                    </h4>
                  )}
                  {process.description && (
                    <p className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%] whitespace-pre-line'>
                      {process.description}
                    </p>
                  )}

                  {process.imageSrc && process.imageSrc.length > 0 && (
                    <div className='grid gap-8'>
                      {process.imageSrc.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className='rounded-[8px] overflow-hidden max-h-[523px]'
                        >
                          <Image
                            src={`images/project-images${image}`}
                            alt={`${process.title} process image ${
                              imageIndex + 1
                            }`}
                            width={200}
                            height={150}
                            className='w-full h-auto'
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {process.myProcessList &&
                    process.myProcessList.length > 0 && (
                      <div className='space-y-2 mt-4'>
                        <h5 className='text-[#B5B5B5] font-bold text-sm sm:text-lg leading-[160%]'>
                          My process included:
                        </h5>
                        <ul className='list-disc pl-4'>
                          {process.myProcessList.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {process.detailsPoints &&
                    process.detailsPoints.length > 0 && (
                      <div className='space-y-2 mt-4'>
                        <h5 className='text-[#B5B5B5] font-bold text-sm sm:text-lg leading-[160%]'>
                          The final solution helped groups:
                        </h5>
                        <ul className='list-disc pl-4'>
                          {process.detailsPoints.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {process.painPoints && process.painPoints.length > 0 && (
                    <div className='space-y-2 mt-4'>
                      <h5 className='text-[#B5B5B5] font-bold text-sm sm:text-lg leading-[160%]'>
                        Some key pain points:
                      </h5>
                      <ul className='list-disc pl-4'>
                        {process.painPoints.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {process.proudOfList && process.proudOfList.length > 0 && (
                    <div className='space-y-2'>
                      <h5 className='text-[#B5B5B5] font-bold text-sm sm:text-lg leading-[160%]'>
                        What I&apos;m Proud Of
                      </h5>
                      <ul className='list-disc pl-4'>
                        {process.proudOfList.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {process.exploreList && process.exploreList.length > 0 && (
                    <div className='space-y-2'>
                      <h5 className='text-[#B5B5B5] font-bold text-sm sm:text-lg leading-[160%]'>
                        If I had more time, I’d:
                      </h5>
                      <ul className='list-disc pl-4'>
                        {process.exploreList.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='text-[#B5B5B5] text-sm sm:text-lg leading-[160%]'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.imageSrc &&
          project.imageSrc.length > 1 &&
          project.imageSrc.slice(1).length > 0 && (
            <div className='flex flex-col gap-8'>
              <h3 className='text-white font-bold text-xl sm:text-2xl leading-[120%]'>
                Few Screens
              </h3>
              {project.imageSrc.length > 1 && (
                <div className='grid gap-8'>
                  {project.imageSrc.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className='rounded-[8px] overflow-hidden max-h-[711px]'
                    >
                      <Image
                        src={`/images/project-images${image}`}
                        alt={`${project.title} project image ${index + 2}`}
                        width={300}
                        height={200}
                        className='w-full h-auto'
                        priority={false}
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 840px'
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        {project.whatIsNext && (
          <div className='flex flex-col gap-3 lg:gap-3.5'>
            <h3 className='text-white font-semibold text-xl sm:text-[22px] leading-[120%]'>
              What&apos;s Next?
            </h3>
            <p className='text-[#B5B5B5] font-normal text-sm sm:text-lg leading-[160%] whitespace-pre-line'>
              {project.whatIsNext}
            </p>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default React.memo(ProjectModal)

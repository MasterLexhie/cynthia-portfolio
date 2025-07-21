import React from 'react'

interface ProjectTagProps {
  tag: string
}

export default function ProjectTag({ tag }: ProjectTagProps) {
  return (
    <div className='bg-[#2E2E2E] rounded-full py-1 px-2'>
      <p className='text-[#B5B5B5] font-bold text-[13px] sm:text-base leading-[150%]'>
        {tag}
      </p>
    </div>
  )
}

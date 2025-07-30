'use client'
import React from 'react'
import { Button } from './Button'

export default function ReachOut() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 px-[22px] sm:px-[66px]'>
      <div className='flex flex-col gap-2.5 justify-center items-center'>
        <h3 className='font-bold text-xl sm:text-[32px] leading-[120%] text-white'>
          Got a project in mind?
        </h3>
        <p className='text-sm sm:text-[22px] leading-[120%] text-global-text-1'>
          feel free to reach out let’s talk.
        </p>
      </div>

      <div>
        <div className='flex  gap-3'>
          <Button
            text={"Let's Talk"}
            iconUrl='/images/email-icon.svg'
            variant='primary'
            textColor='text-black'
            isLink={true}
            linkUrl='mailto:smilewithcynthia@gmail.com'
          />
          <Button
            text={'Download Resume'}
            iconUrl='/images/download-icon.svg'
            variant='secondary'
            textColor='text-white'
            isLink={true}
            linkUrl='https://docs.google.com/document/d/1JgUYR9qE-IclILxOALW2r0GJi4cA06UaFzjNcfQwdGM/mobilebasic?fbclid=PAQ0xDSwLzXtJleHRuA2FlbQIxMAABpwRDREckNsfT5kN4FgqSJv4a7-ASFCzw2exDDYgSfX97atFhB-rzi1dNrzzg_aem_jjqKMv-Q7u8AWDToz-8iWg'
          />
        </div>
      </div>
    </div>
  )
}

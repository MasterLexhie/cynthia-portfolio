'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const getTimeString = () => {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  const paddedMinutes = minutes.toString().padStart(2, '0')
  const offsetMinutes = now.getTimezoneOffset()
  const offsetHours = -offsetMinutes / 60
  const gmtSign = offsetHours >= 0 ? '+' : '-'

  return `${hours
    .toString()
    .padStart(2, '0')}:${paddedMinutes} ${ampm} | GMT ${gmtSign}${Math.abs(
    offsetHours
  )}`
}

const TimeWithGMT: React.FC = () => {
  const [timeString, setTimeString] = useState<string | null>(null)

  useEffect(() => {
    setTimeString(getTimeString())
    const now = new Date()
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds()

    const timeout = setTimeout(() => {
      setTimeString(getTimeString())
      const interval = setInterval(() => {
        setTimeString(getTimeString())
      }, 60 * 1000)
      return () => clearInterval(interval)
    }, msUntilNextMinute)

    return () => clearTimeout(timeout)
  }, [])

  if (!timeString) return null

  return <p className='font-bold text-[16px] uppercase'>{timeString}</p>
}

export const TopNavBar = () => {
  return (
    <div className='max-w-[1120px] sm:px-[66px] py-2.5 sm:py-[11px] md:py-[18px] mx-auto'>
      <div className='flex justify-between items-center border-b border-b-[#242424] md:border-b-transparent px-[22px] sm:px-0 pb-[11px] md:pb-0'>
        <div className='flex items-center sm:hidden mobile-logo'>
          <Image
            src='/images/profile-logo.svg'
            alt='logo'
            width={43}
            height={43}
          />
        </div>
        <div className='hidden sm:flex items-center gap-2 py-3 px-4 rounded-full sm:border sm:border-[#9898982e] bg-dual-gradient'>
          <div className=' desktop-logo'>
            <Image
              src='/images/profile-logo.svg'
              alt='logo'
              width={24}
              height={24}
            />
          </div>
          <p className='font-bold text-[16px]'>Cynthia Osi</p>
        </div>
        <div className='flex items-center gap-2 py-3 px-4 rounded-full border border-[#9898982e] bg-dual-gradient'>
          <TimeWithGMT />
        </div>
      </div>
    </div>
  )
}

export const BottomNavBar = () => {
  return (
    <div>
      <h1>Bottom Nav Bar</h1>
    </div>
  )
}

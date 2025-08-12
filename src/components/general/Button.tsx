'use client'
import Image from 'next/image'
import React from 'react'

interface ButtonProps {
  text: string
  iconUrl?: string
  variant?: 'primary' | 'secondary'
  textColor?: string
  className?: string
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  iconPosition?: 'left' | 'right'
  isLink?: boolean
  linkUrl?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  iconUrl,
  variant = 'primary',
  textColor = 'text-white',
  className = '',
  handleClick,
  iconPosition = 'left',
  isLink = false,
  linkUrl = '',
  ...props
}) => {
  const bgClass =
    variant === 'primary'
      ? 'bg-white hover:bg-[#E8E8E8]'
      : 'bg-[#242424] hover:bg-[#333333]'

  return (
    <>
      {isLink ? (
        <a
          href={linkUrl}
          rel='noopener noreferrer'
          className={`flex items-center gap-2 py-3 px-4 rounded-full font-bold  text-[14px] sm:text-base cursor-pointer border border-[#9898982e] ${bgClass} ${textColor} ${className}`}
          {...props}
        >
          {iconUrl && iconPosition === 'left' && (
            <span className='button-icon'>
              <Image src={iconUrl} alt='icon' width={16} height={16} priority />
            </span>
          )}
          <span>{text}</span>
          {iconUrl && iconPosition === 'right' && (
            <span className='button-icon'>
              <Image src={iconUrl} alt='icon' width={16} height={16} priority />
            </span>
          )}
        </a>
      ) : (
        <button
          className={`flex items-center gap-2 py-3 px-4 rounded-full font-bold  text-[14px] sm:text-base cursor-pointer border border-[#9898982e] ${bgClass} ${textColor} ${className}`}
          onClick={handleClick}
          {...props}
        >
          {iconUrl && iconPosition === 'left' && (
            <span className='button-icon'>
              <Image src={iconUrl} alt='icon' width={16} height={16} priority />
            </span>
          )}
          <span>{text}</span>
          {iconUrl && iconPosition === 'right' && (
            <span className='button-icon'>
              <Image src={iconUrl} alt='icon' width={16} height={16} priority />
            </span>
          )}
        </button>
      )}
    </>
  )
}

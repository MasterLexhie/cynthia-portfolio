'use client'
import Image from 'next/image'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  iconUrl?: string
  variant?: 'primary' | 'secondary'
  textColor?: string
  className?: string
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  iconPosition?: 'left' | 'right'
}

export const Button: React.FC<ButtonProps> = ({
  text,
  iconUrl,
  variant = 'primary',
  textColor = 'text-white',
  className = '',
  handleClick,
  iconPosition = 'left',
  ...props
}) => {
  const bgClass = variant === 'primary' ? 'bg-white' : 'bg-[#242424]'

  return (
    <button
      className={`flex items-center gap-2 py-3 px-4 rounded-full font-bold  text-[14px] sm:text-base cursor-pointer border border-[#9898982e] ${bgClass} ${textColor} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {iconUrl && iconPosition === 'left' && (
        <span className='button-icon'>
          <Image src={iconUrl} alt='icon' width={16} height={16} />
        </span>
      )}
      <span>{text}</span>
      {iconUrl && iconPosition === 'right' && (
        <span className='button-icon'>
          <Image src={iconUrl} alt='icon' width={16} height={16} />
        </span>
      )}
    </button>
  )
}

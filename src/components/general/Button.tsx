'use client'
import Image from 'next/image'
import React from 'react'

type BaseButtonProps = {
  text: string
  iconUrl?: string
  variant?: 'primary' | 'secondary'
  textColor?: string
  className?: string
  iconPosition?: 'left' | 'right'
}

type LinkButtonProps = BaseButtonProps & {
  isLink: true
  linkUrl: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>

type NativeButtonProps = BaseButtonProps & {
  isLink?: false
  linkUrl?: never
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'className'>

export type ButtonProps = LinkButtonProps | NativeButtonProps

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    iconUrl,
    variant = 'primary',
    textColor = 'text-white',
    className = '',
    iconPosition = 'left'
  } = props

  const bgClass =
    variant === 'primary'
      ? 'bg-white hover:bg-[#E8E8E8]'
      : 'bg-[#242424] hover:bg-[#333333]'

  if ('isLink' in props && props.isLink) {
    const linkProps = props as LinkButtonProps
    return (
      <a
        href={linkProps.linkUrl}
        target={linkProps.target}
        rel={
          linkProps.rel ??
          (linkProps.target ? 'noopener noreferrer' : undefined)
        }
        className={`flex items-center gap-2 py-3 px-4 rounded-full font-bold  text-[14px] sm:text-base cursor-pointer border border-[#9898982e] ${bgClass} ${textColor} ${className}`}
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
    )
  }

  return (
    <button
      className={`flex items-center gap-2 py-3 px-4 rounded-full font-bold  text-[14px] sm:text-base cursor-pointer border border-[#9898982e] ${bgClass} ${textColor} ${className}`}
      onClick={(props as NativeButtonProps).handleClick}
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
  )
}

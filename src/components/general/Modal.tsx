'use client'
import React, { useEffect, useRef, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Focus management
  useEffect(() => {
    if (shouldRender) {
      previousFocusRef.current = document.activeElement as HTMLElement

      modalRef.current?.focus()

      document.body.style.overflow = 'hidden'

      document.addEventListener('keydown', handleEscapeKey)

      return () => {
        document.removeEventListener('keydown', handleEscapeKey)
        document.body.style.overflow = 'unset'

        previousFocusRef.current?.focus()
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [shouldRender, handleEscapeKey])

  if (!shouldRender) return null

  return createPortal(
    <div
      className='fixed inset-0 z-50 flex items-end justify-center'
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div
        className={`overlay bg-[#D5D7DA40] absolute w-full h-full transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
      ></div>
      <div
        ref={modalRef}
        className={`w-full pb-8 bg-[#191919] border-t border-[#242424] rounded-t-3xl transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '90vh', height: '90vh' }}
        tabIndex={-1}
        role='document'
      >
        <div className='flex flex-col h-full'>
          <div className='pt-8 sm:pt-16 lg:pt-12 pb-3 max-w-[1120px] w-full px-[22px] sm:px-[66px] mx-auto'>
            <Button
              text={'Back'}
              iconUrl='/images/back-arrow-icon.svg'
              variant='secondary'
              textColor='text-white'
              handleClick={onClose}
            />
          </div>
          <div className='max-w-[1120px] px-[22px] sm:px-[66px] mx-auto flex-1 overflow-y-auto focus:outline-none min-h-0 overscroll-contain'>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal

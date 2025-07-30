'use client'
import React, { useEffect, useRef, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'
import ReachOut from '@/components/general/ReachOut'
import Footer from '@/components/general/Footer'

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
  const [showScrollButton, setShowScrollButton] = useState(false)

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

  const scrollToTop = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (modalRef.current) {
      const scrollTop = modalRef.current.scrollTop
      setShowScrollButton(scrollTop > 300)
    }
  }, [])

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

  // Add scroll listener
  useEffect(() => {
    const scrollContainer = modalRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll, shouldRender])

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
        className={`w-full overflow-scroll pb-8 bg-[#191919] border-t border-[#242424] rounded-t-3xl transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '91vh', height: '91vh' }}
        tabIndex={-1}
        role='document'
      >
        <div className='relative'>
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
          <div className='pt-[42px] lg:pt-[74px] flex flex-col gap-20 relative'>
            <div className='relative max-w-[1120px] mx-auto w-full'>
              <ReachOut />
              {/* Desktop scroll to top button */}
              {showScrollButton && (
                <button
                  onClick={scrollToTop}
                  className='cursor-pointer hidden absolute bottom-0 right-[calc(100%-110px)] sm:flex items-center justify-center w-12 h-12 bg-[#242424] hover:bg-[#333333] border border-[#404040] rounded-full transition-colors duration-200'
                  aria-label='Scroll to top'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 12L8 4M8 4L4 8M8 4L12 8'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              )}
              {/* Mobile scroll to top button - bottom right */}
              {showScrollButton && (
                <button
                  onClick={scrollToTop}
                  className='sm:hidden absolute -bottom-[65px] right-6 z-10 flex items-center justify-center w-12 h-12 bg-[#242424] hover:bg-[#333333] border border-[#404040] rounded-full shadow-lg transition-colors duration-200'
                  aria-label='Scroll to top'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 12L8 4M8 4L4 8M8 4L12 8'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal

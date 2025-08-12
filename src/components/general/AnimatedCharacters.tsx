'use client'

import React, { useMemo } from 'react'
import { LazyMotion, domAnimation, m, Variants } from 'framer-motion'

export interface AnimatedCharactersProps {
  text: string
  as?: React.ElementType
  className?: string
  delay?: number
  stagger?: number
  mode?: 'char' | 'word'
}

const createContainer = (stagger: number): Variants => ({
  hidden: {},
  visible: (customDelay: number = 0) => ({
    transition: {
      staggerChildren: stagger,
      delayChildren: customDelay
    }
  })
})

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      duration: 0.5,
      stiffness: 300,
      damping: 24
    }
  }
}

const wordVariants: Variants = {
  hidden: { y: '100%', opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      duration: 0.5,
      stiffness: 300,
      damping: 24
    }
  }
}

export const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({
  text,
  as,
  className,
  delay = 0,
  stagger = 0.05,
  mode = 'char'
}) => {
  const Component = (as || 'p') as React.ElementType
  const chars = useMemo(() => Array.from(text), [text])
  const words = useMemo(() => text.split(' '), [text])
  const container = useMemo(() => createContainer(stagger), [stagger])

  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        className={`${mode === 'char' ? 'whitespace-pre-wrap' : ''} ${
          className || ''
        }`}
        aria-label={text}
      >
        <m.span
          variants={container}
          initial='hidden'
          animate='visible'
          custom={delay}
        >
          {mode === 'char'
            ? chars.map((char, index) => (
                <m.span
                  key={`char-${index}`}
                  variants={charVariants}
                  style={{
                    display: 'inline-block',
                    willChange: 'transform, filter, opacity'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </m.span>
              ))
            : words.map((word, index) => (
                <span
                  key={`word-wrap-${index}`}
                  className='inline-block overflow-hidden align-top'
                >
                  <m.span
                    className='inline-block will-change-transform'
                    variants={wordVariants}
                  >
                    {word}
                  </m.span>
                  {index < words.length - 1 && ' '}
                </span>
              ))}
        </m.span>
      </Component>
    </LazyMotion>
  )
}

export default AnimatedCharacters

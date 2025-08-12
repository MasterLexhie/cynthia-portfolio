import React from 'react'
import {
  AboutMeSection,
  MyProcessSection,
  SkillSection
} from '@/components/about-page'

export default function About() {
  return (
    <main id='main-content'>
      <AboutMeSection />
      <MyProcessSection />
      <SkillSection />
    </main>
  )
}

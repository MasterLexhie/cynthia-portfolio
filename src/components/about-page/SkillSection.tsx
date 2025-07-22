'use client'
import React, { useState } from 'react'
import { Button } from '../general/Button'

const skillTabs = [
  { id: 'tools', label: 'Tools' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'languages', label: 'Languages' }
]

const toolsData = [
  'Figma',
  'Lovableai',
  'ChatGPT',
  'DeepSeek',
  'Notion',
  'Google Meet',
  'Slack',
  'Zoom',
  'Photopie'
]

const expertiseData = [
  'User Research',
  'Design Thinking',
  'Usability Testing',
  'Information Architecture',
  'UI Design',
  'Prototyping',
  'Visual Design',
  'Interaction Design',
  'Vibe-coding',
  'Ux Design',
  'Illustration',
  'Style Guide'
]

const languageData = ['English - Advanced', 'French - Beginner']

interface SkillCardProp {
  skill: string
}

const SkillCard: React.FC<SkillCardProp> = ({ skill }) => {
  return (
    <div className='bg-[#242424] text-white rounded-[8px] px-3 py-3 sm:px-4 sm:py-4 lg:px-4 lg:py-4 font-product-sans font-normal text-base sm:text-lg lg:text-[18px] leading-[22px] w-full border border-[#9898982e]'>
      {skill}
    </div>
  )
}

const SkillSection: React.FC = () => {
  const [activeSkillTab, setActiveSkillTab] = useState<
    'tools' | 'expertise' | 'languages'
  >('tools')

  return (
    <section className='pb-8 sm:pb-12 lg:pb-[60px]'>
      <div className='max-w-[1120px] px-[22px] mx-auto'>
        <h2 className='text-global-2 font-product-sans font-bold text-2xl sm:text-3xl lg:text-[28px] leading-[34px] mb-8 sm:mb-12 lg:mb-[60px]'>
          Skills
        </h2>

        {/* Skill Tabs */}
        <div className='flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-[77px]'>
          {skillTabs.map((tab) => (
            <Button
              key={tab.id}
              text={tab.label}
              onClick={() =>
                setActiveSkillTab(tab.id as 'tools' | 'expertise' | 'languages')
              }
              variant={activeSkillTab === tab.id ? 'primary' : 'secondary'}
              textColor={
                activeSkillTab === tab.id ? 'text-black' : 'text-white'
              }
              className={`
            px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-1.5 
            rounded-[16px] font-product-sans font-bold text-sm sm:text-base lg:text-[16px] leading-5 capitalize
            ${
              activeSkillTab === tab.id
                ? 'bg-button-1 text-button-1'
                : 'bg-global-2 text-global-2'
            }
          `}
            />
          ))}
        </div>

        {/* Skills Grid */}
        {activeSkillTab === 'tools' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[22px]'>
            {toolsData.map((tool, index) => (
              <SkillCard key={index} skill={tool} />
            ))}
          </div>
        )}

        {activeSkillTab === 'expertise' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[22px]'>
            {expertiseData.map((expertise, index) => (
              <SkillCard key={index} skill={expertise} />
            ))}
          </div>
        )}

        {activeSkillTab === 'languages' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-[22px]'>
            {languageData.map((language, index) => (
              <SkillCard key={index} skill={language} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillSection

export interface IProjectList {
  description: string
  id: number
  imageSrc: string[]
  intro?: string
  myProcess?: Array<{
    title?: string
    description?: string
    myProcessList?: string[]
    detailsPoints?: string[]
    painPoints?: string[]
    proudOfList?: string[]
    exploreList?: string[]
    imageSrc?: string[]
  }>
  objectives?: {
    primary?: string[]
    secondary?: string[]
    designFeature?: Array<{
      title?: string
      description?: string
    }>,
    designApproach?: {
      intro: string
      principles: Array<{
        title: string
        description: string
        introSentence?: string
        bullets?: string[]
        outroSentence?: string
        image?: string
      }>
    }
  }
  projectType:
    | 'case_study'
    | 'live_site'
    | 'live_soon'
    | 'ui_design'
    | 'post'
    | 'illustration'
  redirectLink?: string
  role?: string[]
  tags: string[]
  team?: string
  title: string
  tools?: string[]
  website?: string
  whatIsNext?: string
  whatWeDeliver?: string[]
}
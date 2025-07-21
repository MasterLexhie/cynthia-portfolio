import { TopNavBar } from '@/components/general/NavBar'
import { HeroSection, ProjectSection } from '@/components/landing-page'

export default function Home() {
  return (
    <main>
      <TopNavBar />
      <HeroSection />
      <ProjectSection />
    </main>
  )
}

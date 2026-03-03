import Tools from './Tools'
import Header from "./Header"
import HeroSection from "./HeroSection"
import  ProfessionalExperience from "./ProfessionalExperience"
import FeaturedProjects from "./Projects"
import LetWorkTogether from "./LetWorkTogethe"
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <Tools />
      <FeaturedProjects />
      {/* <Contact />
      <About /> */}
      <ProfessionalExperience />
      
         <LetWorkTogether />

    </div>
  )
}


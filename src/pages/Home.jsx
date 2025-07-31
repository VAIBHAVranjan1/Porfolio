import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import SkillsSection from '../components/SkillsSection'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <StarBackground />
        <NavBar />

        <main>
          <HeroSection />
          <About />
          <SkillsSection />
          <Projects />
          <Contact />
        </main>

        <Footer />

    </div>
  )
}

export default Home
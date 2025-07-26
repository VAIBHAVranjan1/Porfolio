import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <ThemeToggle />
        <StarBackground />
        <NavBar />
        <main>
          
        </main>
    </div>
  )
}

export default Home
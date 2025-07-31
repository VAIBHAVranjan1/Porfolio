import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: "#hero" },
  { name: 'About', href: "#about" },
  { name: 'Skills', href: "#skills" },
  { name: 'Projects', href: "#projects" },
  { name: 'Contact', href: "#contact" },
]

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenu, setIsMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300 background-blur-md",
      isScrolled ? "p-3 bg-background/80 shadow-xs" : "p-5"
    )}>
      <div className='container flex items-center justify-between'>
        <a className='text-2xl font-bold text-primary flex items-center' href='#hero'>
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Vaibhav </span>Portfolio
          </span>
        </a>

        {/* ✅ Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6 text-xl'>
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
              {item.name}
            </a>
          ))}
          <ThemeToggle /> {/* ✅ Visible on desktop now */}
        </div>

        {/* ✅ Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenu ? 'Close Menu' : 'Open Menu'}
        >
          {isMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ✅ Mobile Dropdown Menu */}
        <div className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className='flex flex-col space-y-8 text-xl items-center'>
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                onClick={() => setIsMenu(false)}>
                {item.name}
              </a>
            ))}
            <ThemeToggle /> {/* ✅ Visible on mobile menu */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

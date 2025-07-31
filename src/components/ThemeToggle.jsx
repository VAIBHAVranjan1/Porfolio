import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        
        // ✅ If no theme is set, default to dark
        if (storedTheme === "light") {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        } else {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark") // Optional: force storing default
        }
    }, [])

    const toggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }

    return (
        <button 
  onClick={toggle} 
  className={cn(
    "p-2 rounded-full transition-colors duration-300",
    "focus:outline-none"
  )}
>
  {isDarkMode ? 
    <Sun className='h-6 w-6 text-yellow-500' /> : 
    <Moon className='h-6 w-6 text-blue-900' />}
</button>

    )
}

export default ThemeToggle

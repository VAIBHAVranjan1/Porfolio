import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 py-4 mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Vaibhav Ranjan. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer

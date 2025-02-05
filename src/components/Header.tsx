'use client'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import HeaderTopStart from './HeaderTopStart'

function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value (200) to change when the sticky behavior starts
      setIsSticky(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={`top-0 !z-[1001] bg-white ${isSticky ? 'stickyHeader' : 'relative'}`}
    >
      <HeaderTopStart />
      <Navbar />
    </div>
  )
}

export default Header

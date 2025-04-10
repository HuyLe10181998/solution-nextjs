'use client'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import HeaderTopStart from './HeaderTopStart'
import { getInfo } from '@/actions/info.action'
import Loading from './Loading/Loading'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    const fetchData = async () => {
      try{
        const infoData = await getInfo('user')
        setData(infoData)
      }catch(e){

      }
  
    }
    fetchData()

  }, [])
  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value (200) to change when the sticky behavior starts
      setIsSticky(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  if (!data) return null

  return (
    <div
      className={`top-0 !z-[1001] bg-white ${isSticky ? 'stickyHeader' : 'relative'}`}
    >
      <HeaderTopStart data={data} />
      <Navbar phoneNumber={data?.phoneNumber} />
    </div>
  )
}

export default Header

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderData } from '@/models/common.model'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const MobileNav = (data: HeaderData) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <div className="text-center lg:hidden">
        <button
          className="focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="drawer-navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 z-40 w-full md:w-64 h-screen p-7 overflow-y-auto transition-transform bg-white ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="logo">
          <Link href="/" className="header-logo">
            <Image
              src="https://api-solution-r8zk.onrender.com/uploads/1734428457073.png"
              alt="logo"
              width={120}
              height={50}
            />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {data?.menuLinks?.map((item) => {
              const isActive =
                item.link === pathname ||
                item.children?.some((child) => child.link === pathname)

              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`flex items-center p-2 text-gray-900 hover:!text-white rounded-lg  dark:hover:bg-blue-600 group ${isActive ? 'text-primary-default' : ''}`}
                  >
                    <span className="ms-3">{item.label}</span>
                  </Link>
                  {item.children && !item.hideChildren && (
                    <ul className="pl-10 mt-2 space-y-2">
                      {item.children.map((child) => {
                        if (child.hide) return null
                        const isActive = child.link === pathname
                        return (
                          <li className="!list-disc" key={child.link}>
                            <Link
                              href={child.link}
                              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700 group ${isActive ? '!text-primary-default' : ''}`}
                            >
                              <span className="ms-3">{child.label}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
               {
          !pathname.includes("admin") &&   <li className='p-2'>
          <a target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/forms/d/e/1FAIpQLSeohjIMI1uDNIuE2B8aeZzKThzpGbtMC8ipyRQqppf_SJRQJw/viewform"  className={`flex items-center p-2 text-gray-900 hover:!text-white rounded-lg  dark:hover:bg-blue-600 group`}>
        Nhập hồ sơ thông tin
      </a>
          </li>
         }
          </ul>
        </div>
      </div>
    </>
  )
}

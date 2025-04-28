'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderData } from '@/models/common.model'

export const DesktopNav = (data: HeaderData) => {
  const pathname = usePathname()

  return (
    <div className="mean__menu-wrapper hidden lg:flex">
      <div className="main-menu">
        <ul>
          {data?.menuLinks?.map((item, index) => {
            const isActive =
              item.link === pathname ||
              item.children?.some((child) => child.link === pathname)
            return (
              <li key={index}>
                <Link
                  prefetch
                  href={item.link}
                  className={`border-none !flex gap-2 items-center ${isActive ? '!text-primary-default' : ''}`}
                >
                  {item.label}
                  {item?.children?.length && !item?.hideChildren && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </Link>

                {item?.children?.length && (
                  <ul className="submenu">
                    {item?.children?.map((i, ind) => {
                      if (i?.hide) return null
                      return (
                        <li
                          className={`${i.link === pathname ? 'active' : ''}`}
                          key={ind}
                        >
                          <Link
                            href={i?.link}
                            className={`${i.link === pathname ? 'text-primary-default' : ''} border-none`}
                          >
                            {i?.label}
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
          !pathname.includes("admin") &&   <li>
          <a target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/forms/d/e/1FAIpQLSeohjIMI1uDNIuE2B8aeZzKThzpGbtMC8ipyRQqppf_SJRQJw/viewform" className="text-blue-700 hover:text-blue-500 ml-2 text-lg">
        Nhập hồ sơ thông tin
      </a>
          </li>
         }
        </ul>
      </div>
    </div>
  )
}

"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


const DesktopNav = () => {
  const pathname = usePathname()
  console.log('pathname',pathname)
  const data = [
    {
      label: "Trung tâm tư vấn Sky",
      link: "/"
    },
    {
      label: "Chương trình định cư",
      link: "/immigration/usa",
      hideChildren: true,
      children: [
        {
          label: "Định cư Úc",
          link: "/immigration/australia",
          hide: true
        },
        {
          label: "Định cư Mỹ",
          link: "/immigration/usa",
          hide: true
        },
        {
          label: "Định cư Canada",
          link: "/immigration/canada",
          hide: true
        },
        {
          label: "Định cư Tây Ban Nha",
          link: "/immigration/spain",
          hide: true
        },
        {
          label: "Định cư các nước khác",
          link: "/immigration/more",
          hide: true
        }
      ]
    },
    {
      label: "Tin Tức",
      link: "/news"
    },
    {
      label: "Liên hệ",
      link: "/contact"
    }
  ]
  return (
    <div className="mean__menu-wrapper hidden lg:flex">
    <div className="main-menu">
            <ul>
              {data.map((item)=> {
                return    <li key={item.link} className={`${item.link === pathname ? "active" : ""}`}>
                  <Link href={item.link} className="border-none">{item.label}</Link>
              
              {item?.children?.length && (
 <ul className="submenu">
 {item?.children?.map((i)=>{
  if(i?.hide) return null
   return <li className={`${i.link === pathname ? "active" : ""}`} key={item.link}>
    <Link href={i?.link} className="border-none">{i?.label}</Link>
    </li>
 })}

</ul>
              )}
               
            </li>
              })}
             
             
              
            
           
            
               
            </ul>
    </div>
</div>
  )
}

const MobileNav = () => {
  const data = [
    {
      label: "Trung tâm tư vấn Sky",
      link: "/"
    },
    {
      label: "Chương trình định cư",
      link: "/immigration/usa",
      hideChildren: true,
      children: [
        {
          label: "Định cư Úc",
          link: "/immigration/australia",
          hide: true
        },
        {
          label: "Định cư Mỹ",
          link: "/immigration/usa",
          hide: true
        },
        {
          label: "Định cư Canada",
          link: "/immigration/canada",
          hide: true
        },
        {
          label: "Định cư Tây Ban Nha",
          link: "/immigration/spain",
          hide: true
        },
        {
          label: "Định cư các nước khác",
          link: "/immigration/more",
          hide: true
        }
      ]
    },
    {
      label: "Tin Tức",
      link: "/news"
    },
    {
      label: "Liên hệ",
      link: "/contact"
    }
  ];

  return (
    <>
      <div className="text-center lg:hidden">
        <button 
          className="focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" 
          type="button" 
          data-drawer-target="drawer-navigation" 
          data-drawer-show="drawer-navigation" 
          aria-controls="drawer-navigation"
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </button>
      </div>

      <div 
        id="drawer-navigation" 
        className="fixed top-0 left-0 z-40 w-full md:w-64 h-screen p-7 overflow-y-auto transition-transform -translate-x-full bg-white" 
        tabIndex={-1} 
        aria-labelledby="drawer-navigation-label"
      >
        <div className="logo">
                          <Link href="/" className="header-logo">
                              <Image src="http://sky-solution.up.railway.app/uploads/1734428457073.png" alt="logo" width={120} height={50} />
                          </Link>
                      </div>
        <button 
          type="button" 
          data-drawer-hide="drawer-navigation" 
          aria-controls="drawer-navigation" 
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

    
        
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {data.map((item) => (
              <li key={item.link}>
                <a href={item.link} className="flex items-center p-2 text-gray-900 hover:!text-white rounded-lg dark:text-primary-text hover:bg-gray-100 dark:hover:bg-blue-600 group">
                  <span className="ms-3">{item.label}</span>
                </a>
                {item.children && !item.hideChildren && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => !child.hide && (
                      <li key={child.link}>
                        <a href={child.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          <span className="ms-3">{child.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function Navbar() {

  return   <header className="header-section-1 bg-white z-[1001]">
  <div className="header-1">
      <div className="px-4 md:px-12 lg:px-16">
          <div className="mega-menu-wrapper">
              <div className="header-main">
                  <div className="header-left">
                      <div className="logo">
                          <Link href="/" className="header-logo">
                              <Image src="http://sky-solution.up.railway.app/uploads/1734428457073.png" alt="logo" width={120} height={50} />
                          </Link>
                      </div>
                      <DesktopNav />
                      
                  </div>
                  <div className="header-right flex justify-end items-center">
                      <div className="contact-info">
                          <div className="icon">
                              <img src="/assets/img/call.png" alt="phone icon" width={24} height={24} />
                          </div>
                          <div className="content">
                              <p>Phone:</p>
                              <h6>
                                  <Link href="tel:+23645689622">+236 (456) 896 22</Link>
                              </h6>
                          </div>
                      </div>
<MobileNav />
                 
                
                    
                  </div>
              </div>
          </div>
      </div>
  </div>
</header>
}
export default Navbar;

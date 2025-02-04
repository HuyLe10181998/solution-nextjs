"use client"
import Link from "next/link";
import Image from "next/image";
// import { MobileNav } from "./MobileNav";
// import { DesktopNav } from "./DesktopNav";
import { getHeaderData } from "@/actions/info.action";
import { useState, useEffect } from 'react';
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { HeaderData } from "@/models/common.model";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading/Loading";

function Navbar() {
  const [data, setData] = useState<HeaderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname()
  const isAdmin = pathname.includes('/admin')
  const router = useRouter();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const headerData = await getHeaderData(isAdmin ? 'admin' : 'user');
        setData(headerData);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  

  if (isLoading) return <Loading />;
  if(!data) return null;

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
                      <DesktopNav {...data} />
                      
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
                      <MobileNav {...data} />
                  </div>
              </div>
          </div>
      </div>
  </div>
</header>
}
export default Navbar;

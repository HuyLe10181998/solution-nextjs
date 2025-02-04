
import React, { useEffect, useState } from "react";
import { FacebookIcon,InstagramIcon,MailIcon,MapPinIcon } from "@/assets/icons";
import { getInfo } from "@/actions/info.action";


const  HeaderTopStart: React.FC =   () => {
  const [data,setData] = useState<any>(null)
  useEffect(()=>{
    const fetchData = async () => {
      const infoData = await getInfo('user')
      setData(infoData)
    }
    fetchData()
  },[])
  if(!data) return null;
  return (
    <div className="header-top-section hidden md:block !px-8 bg-white">
      <div className="container mx-auto">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li className="flex items-center">
               <MailIcon />
              <a href="mailto:info@example.com" className="link">{data?.email}</a>
            </li>
            <li className="flex items-center">
              <MapPinIcon />
              <span className="text-primary-gray">{data?.address}</span>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon flex items-center">
              <a href={data?.facebookLink || '/'} className="text-primary-gray"><FacebookIcon /></a>
              <a href={data?.instagramLink || '/'} className="text-primary-gray"><InstagramIcon /></a>

             
            </div>
            <ul className="header-menu">
              <li><a href="/contact" className="text-primary-gray">Help</a></li>
              <li><a href="/contact" className="text-primary-gray">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopStart;
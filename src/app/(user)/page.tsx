import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from '@/components/Service'
import Brand from '@/components/Brand'
import Banner from '@/components/Banner'
import Counter from '@/components/Counter'
import Testimonial from '@/components/Testimonial'
import ChatAction from '@/components/ChatAction'
import Process from '@/components/Process'
import { getHome } from '@/actions/home.action'
import Loading from '@/components/Loading/Loading'

export default async function Home() {
  const homeData = await getHome()
  if (!homeData) {
    return <Loading />
  }
  return (
    <>
      <Hero data={homeData?.heroData?.slides} />
      <About data={homeData?.aboutData} />
      <Service data={homeData?.serviceData} />
      <Brand />
      <Banner />
      <Counter />
      <Testimonial data={homeData?.testimonialData} />
      <ChatAction />
      <Process />
    </>
  )
}

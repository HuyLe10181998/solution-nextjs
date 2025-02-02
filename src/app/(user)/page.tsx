import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Brand from "@/components/Brand";
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Testimonial from "@/components/Testimonial";
import ChatAction from "@/components/ChatAction";
import Process from "@/components/Process";


export default async function Home() {
  return (
    <>
     <Hero />
     <About />
     <Service />
     <Brand />
     <Banner />
     <Counter />
     <Testimonial />  
     <ChatAction />
     <Process />
    </>
     
  );
}

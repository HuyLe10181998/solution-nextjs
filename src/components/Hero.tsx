"use client"
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Hero({data}: any) {
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
    return (
        <div className="">
                <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="hero-section hero-1 slideInLeft transition-all duration-1000"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px  min-h-[700px]"
        className="swiper-wrapper"
      >
         {data?.map((item:any,index:any)=> {
                    return   <div key={index} className="swiper-slide" data-carousel-item={item.active ? `active` : Boolean(true)}>
                    <div className="shape-image" data-animation="fadeInLeft" data-delay="2.1s">
                                    <img src="assets/img/hero/object1.png" alt="shape-img" />
                                </div>
                    <div className="shape-image-2 fadeInRight animated" data-animation="fadeInRight" data-delay="2.3s">
                                    <img src="assets/img/hero/right-shape.png" alt="shape-img" />
                                </div>
                    <div className="hero-image bg-cover"  style={{ backgroundImage: `url('${item.background}')` }}></div>
                    <div className="container px-16 md:px-36">
                        <div className="grid gap-4">
                            <div className="grid-cols-8">
                                <div className="hero-content">
                                    <h6 data-animation="slideInRight" data-duration="2s" data-delay=".3s">
                                       {item.tag}
                                    </h6>
                                    <h1 dangerouslySetInnerHTML={{ __html: item.title }} data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                        
                                    </h1>
                                    <p dangerouslySetInnerHTML={{ __html: item.description }} data-animation="slideInRight" data-duration="2s" data-delay=".7s">
                                        
                                    </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                })}
      </Carousel>
        </div>
    
     
    );
}

export default Hero;
"use client"
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonial({data}:any) {

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

        <section className="testimonial-section lg:py-20 xl:py-28 py-10">
        <div className="container mx-auto">
            <div className="section-title text-center">
                <span className="wow fadeInUp">{data.title}</span>
                <h2 dangerouslySetInnerHTML={{__html: data.heading}} className="title-anim">
                </h2>
            </div>
            <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="testimonial-carousel-active"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="swiper-wrapper"
      >
         {data?.users?.map((item:any)=> {
                    return    <div key={item.id} className="testimonial-card-items">
                    <div className="author-items">
                        <div className="author-image bg-cover" style={{backgroundImage: `url(${item.avatar})`}}></div>
                        <div className="author-content">
                            <h5>{item.name}</h5>
                            <span>{item.job}</span>
                        </div>
                    </div>
                    <p>
                        {item.text}
                    </p>
                    <ul>
                        <li>{item.date}</li>
                    </ul>
                </div>
                })}
      </Carousel>
        </div>
    </section>
              
    
     
    );
}

export default Testimonial;
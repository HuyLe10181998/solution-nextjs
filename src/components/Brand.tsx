'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Brand: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <div className="brand-section fix p-12 pt-0">
      <div className="container mx-auto">
        <div className="brand-wrapper">
          <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
            30+ BRANDS TRUST US
          </h6>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="brand-image p-4 hover:scale-110 transition-transform duration-300"
              >
                <img
                  width={200}
                  src={`https://api-solution-r8zk.onrender.com/uploads/logo/pic-${index + 1}.png`}
                  alt={`brand-img-${index + 1}`}
                  className="m-auto object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Brand

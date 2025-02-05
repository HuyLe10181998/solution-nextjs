import React from 'react'
import { CheckIcon } from '../assets/icons'
import CircularProgress from './ui/circle-progress'
function About({ data }: any) {
  return (
    <section className="about-section fix lg:p-12 md:p-24 p-8">
      <div className="container">
        <div className="about-wrapper">
          <div className="!grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="">
              <div className="about-image-items">
                <div className="border-shape">
                  <img
                    src="assets/img/about/border-shape.png"
                    alt="shape-img"
                  />
                </div>
                <div
                  className="about-image bg-cover wow fadeInLeft"
                  data-wow-delay=".3s"
                  style={{ backgroundImage: `url('${data.imgLarge}')` }}
                >
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img width={300} src={data.img} alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">{data.title}</span>
                  <h2 className="title-anim">Welcome to Experience Solution</h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {data.description}
                </p>
                <div className="circle-progress-bar-wrapper">
                  <div
                    className="single-circle-bar wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <CircularProgress percentage={68} />
                    <div className="content">
                      <h6>
                        Business <br />
                        Strategy
                      </h6>
                    </div>
                  </div>
                  <div
                    className="single-circle-bar wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <CircularProgress percentage={93} />

                    <div className="content">
                      <h6>
                        Real Technology <br />
                        Solutions
                      </h6>
                    </div>
                  </div>
                </div>
                <ul
                  className="about-list wow fadeInUp !mt-8"
                  data-wow-delay=".7s"
                >
                  <li className="flex gap-2">
                    <CheckIcon />
                    Immigration & Visa Consulting
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    Direct Online Interview
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    99% Visa Approvals
                  </li>
                </ul>
                <div className="about-author">
                  {/* <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                                        <a href="" className="theme-btn">
                                           <span>
                                                 Learn More Us 
                                                <i className="fas fa-chevron-right"></i>
                                           </span>
                                        </a>
                                    </div> */}
                  {/* <div className="author-image wow fadeInUp" data-wow-delay=".9s">
                                        <img src="assets/img/about/author.png" alt="author-img" />
                                        <div className="content">
                                            <img src="assets/img/about/signature.png" alt="signature" />
                                            <p>Ceo & Founder</p>
                                        </div>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

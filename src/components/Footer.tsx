import { getInfo } from '@/actions/info.action'
import React from 'react'

const Footer: React.FC = async () => {
  const infoData = await getInfo('user')
  return (
    <footer className="footer-section footer-bg">
      <div className="container mx-auto">
        <div className="footer-widgets-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="index.html">
                    <img
                      width={240}
                      src="https://api-solution-production.up.railway.app/uploads/1734428457073.png"
                      alt="logo-img"
                    />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    We believe it has the power to do <br />
                    amazing things.
                  </p>
                  <a href={`mailto:${infoData?.email}`} className="link">
                    {infoData?.email}
                  </a>
                  {/* <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Explore</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Visa</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <a href="/">Work Visa</a>
                  </li>
                  <li>
                    <a href="/">Students Visa</a>
                  </li>
                  <li>
                    <a href="/">Business Visa</a>
                  </li>
                  <li>
                    <a href="/">Family Visa</a>
                  </li>
                  <li>
                    <a href="/">Travel Visa</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Address:</h5>
                </div>
                <div className="footer-address-text">
                  <p>{infoData?.address}</p>
                  <h5>Hours:</h5>
                  <p>
                    {infoData?.timeEnd} - {infoData?.timeStart} <br />
                    {infoData?.workingDays}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container mx-auto">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              Copyright © 2024 <a href="/">Solution</a>. All Rights Reserved.
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a href="/">Company</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Faqs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

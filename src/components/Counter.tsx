import { GlobalIcon, MoneyIcon, OfficerIcon, VisaIcon } from '@/assets/icons'
import React from 'react'

function Counter() {
  return (
    <section className="counter-section section-padding section-bg">
      <div className="container mx-auto">
        <div className="counter-wrapper">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="wow fadeInUp" data-wow-delay=".3s">
              <div className="counter-items text-center">
                <div className="icon center flex items-center justify-center">
                  <GlobalIcon />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">35</span>+
                  </h2>
                  <p>
                    Countries <br />
                    Represented
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".5s">
              <div className="counter-items text-center">
                <div className="icon center flex items-center justify-center">
                  <VisaIcon />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">853</span>+
                  </h2>
                  <p>
                    Completed <br />
                    Visas & Passports
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".7s">
              <div className="counter-items text-center">
                <div className="icon center flex items-center justify-center">
                  <MoneyIcon />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">55</span>M+
                  </h2>
                  <p>
                    Revenue <br />
                    Per Year
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".9s">
              <div className="counter-items text-center">
                <div className="icon center flex items-center justify-center">
                  <OfficerIcon />
                </div>
                <div className="content">
                  <h2>
                    <span className="count">35</span>+
                  </h2>
                  <p>
                    Experienced <br />
                    Immigration Officers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter

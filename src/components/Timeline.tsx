import { MeetingIcon, MoneyIcon, PassportIcon, VisaIcon } from '@/assets/icons'

function TimeLine(): JSX.Element {
  return (
    <section className="process-work-section fix !pt-0">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="mb-2">
            Timeline of <span className='!text-primary-text'>the Process</span>
            
          </h2>
        <span className="wow fadeInUp">There are 5 unique phases of the U.S. Visa process, ending in the insurance of a U.S. visa or Green Card</span>

        </div>
        <div className="process-work-wrapper">
          {/* <div className="line-shape">
            <img src="/assets/img/linepng.png" alt="img" />
          </div> */}
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-12">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="work-process-items text-center">
                <div className="icon flex items-center justify-center">
                  {/* <PassportIcon /> */}
                  <MeetingIcon />

                  <h6 className="number">1</h6>
                </div>
                <div className="content">
                  {/* <h4>1. </h4> */}
                  <p>
                    Find an employer to sponsor you
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="work-process-items text-center">
                <div className="content style-2">
                  {/* <h4>2. </h4> */}
                  <p>
                    File and apply for the process
                  </p>
                </div>
                <div className="icon flex items-center justify-center">
                  {/* <MoneyIcon /> */}
                  {/* <VisaIcon /> */}
                  <img alt="Apply" src="/assets/img/timeline/apply.png" />


                  <h6 className="number">2</h6>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".6s">
              <div className="work-process-items text-center">
                <div className="icon flex items-center justify-center">
                  {/* <MeetingIcon /> */}
                  <VisaIcon />


                  <h6 className="number">3</h6>
                </div>
                <div className="content">
                  {/* <h4>Yêu cầu cuộc hẹn</h4> */}
                  <p>
                    Get Green Card or work authorization.
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".8s">
              <div className="work-process-items text-center">
                <div className="content style-2">
                  {/* <h4>Nhận Visa Của Bạn Ngay</h4> */}
                  <p>
                    Start working for your employer
                  </p>
                </div>
                <div className="icon flex items-center justify-center">
                  <img alt="working" src="/assets/img/timeline/working.png" />

                  <h6 className="number">4</h6>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".10s">
              <div className="work-process-items text-center">
                <div className="icon flex items-center justify-center">
                  <MoneyIcon />
                  <h6 className="number">5</h6>
                </div>
                <div className="content">
                  {/* <h4>Yêu cầu cuộc hẹn</h4> */}
                  <p>
                   Live your American dream.
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

export default TimeLine

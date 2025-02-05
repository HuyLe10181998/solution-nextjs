import { MeetingIcon, MoneyIcon, PassportIcon, VisaIcon } from '@/assets/icons'

function Process(): JSX.Element {
  return (
    <section className="process-work-section fix section-padding !pt-0">
      <div className="container mx-auto">
        <div className="section-title text-center">
          <span className="wow fadeInUp">Quy Trình Làm Việc</span>
          <h2 className="title-anim">
            4 Bước Đơn Giản Để Bạn Có Thể <br />
            Lấy Visa Một Cách Dễ Dàng
          </h2>
        </div>
        <div className="process-work-wrapper">
          <div className="line-shape">
            <img src="assets/img/linepng.png" alt="img" />
          </div>
          <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="work-process-items text-center">
                <div className="icon flex items-center justify-center">
                  <PassportIcon />
                  <h6 className="number">1</h6>
                </div>
                <div className="content">
                  <h4>Chọn Dịch Vụ</h4>
                  <p>
                    Trong thời gian rảnh, khi chúng ta có thể tự do lựa chọn
                    dịch vụ phù hợp nhất.
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".4s">
              <div className="work-process-items text-center">
                <div className="content style-2">
                  <h4>Chuẩn Bị Hồ Sơ và Thanh Toán</h4>
                  <p>
                    Trong thời gian rảnh, khi chúng ta có thể tự do lựa chọn
                    dịch vụ phù hợp nhất.
                  </p>
                </div>
                <div className="icon flex items-center justify-center">
                  <MoneyIcon />
                  <h6 className="number">2</h6>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".6s">
              <div className="work-process-items text-center">
                <div className="icon flex items-center justify-center">
                  <MeetingIcon />
                  <h6 className="number">3</h6>
                </div>
                <div className="content">
                  <h4>Yêu cầu cuộc hẹn</h4>
                  <p>
                    Trong thời gian rảnh, khi chúng ta có thể tự do lựa chọn
                    dịch vụ phù hợp nhất.
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".8s">
              <div className="work-process-items text-center">
                <div className="content style-2">
                  <h4>Nhận Visa Của Bạn Ngay</h4>
                  <p>
                    Trong thời gian rảnh, khi chúng ta có thể tự do lựa chọn
                    dịch vụ phù hợp nhất.
                  </p>
                </div>
                <div className="icon flex items-center justify-center">
                  <VisaIcon />
                  <h6 className="number">4</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

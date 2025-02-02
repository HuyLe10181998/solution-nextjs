import React from "react";

function Service() {

    const data = {
        "title": "Dịch Vụ Của Chúng Tôi",
        "heading": "Khám Phá Các Dịch Vụ Tư Vấn Định Cư, <br> Du Học & Di Trú",
        "services": [
          {
            "title": "Visa Kinh Doanh",
            "description": "Cung cấp cơ hội cho các nhà đầu tư và doanh nhân mở rộng cơ hội kinh doanh quốc tế và phát triển sự nghiệp.",
            "image": "http://sky-solution.up.railway.app/uploads/1734578277095.jpg",
            "link": ""
          },
          {
            "title": "Visa Học Sinh",
            "description": "Hỗ trợ sinh viên quốc tế đạt được ước mơ học tập tại các trường đại học danh tiếng trên thế giới.",
            "image": "http://sky-solution.up.railway.app/uploads/1734578282675.jpg",
            "link": ""
          },
          {
            "title": "Visa Làm Việc",
            "description": "Giúp bạn tìm kiếm cơ hội làm việc và phát triển sự nghiệp tại các quốc gia phát triển với Visa lao động hợp lệ.",
            "image": "http://sky-solution.up.railway.app/uploads/1734578286100.jpg",
            "link": ""
          },
          {
            "title": "Visa Du Lịch",
            "description": "Cung cấp các dịch vụ thị thực du lịch giúp bạn khám phá các điểm đến tuyệt vời trên thế giới một cách dễ dàng.",
            "image": "http://sky-solution.up.railway.app/uploads/1734578293656.jpg",
            "link": ""
          }
        ],
    
      }
    return   <section className="service-section fix section-padding pt-0">
    <div className="container mx-auto">
        <div className="section-title text-center">
            <span className="wow fadeInUp">Service We Provide</span>
            <h2 className="title-anim">
                Explore Our Visa Citizenship <br />
                & Immigration Services
            </h2>
        </div>
    </div>
    <div className="service-wrapper">
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
           {data.services.map((item)=>{
            return  <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="service-card-items">
                <h3><a href="#">{item.title}</a></h3>
                <p>
                    {item.description}
                </p>
                <div className="service-thumb">
                    <img src={item.image} alt="img" />
                </div>
                <a href="service-details.html" className="link-btn">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
           })}
        
       </div>
    </div>
    </section>
}

export default Service;
"use client"
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonial() {

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
 const data = {
    "title": "Những Lời Chứng Thực",
    "heading": "Khách Hàng Nói Gì Về Dịch Vụ Của Chúng Tôi",
    "users": [
      {
        "id": 1,
        "name": "Nguyễn Minh Tâm",
        "job": "Lập Trình Viên Web",
        "text": "Dịch vụ của công ty giúp tôi tiết kiệm thời gian và công sức rất nhiều. Họ không chỉ hỗ trợ kỹ thuật mà còn tư vấn về cách tối ưu hóa hiệu suất công việc. Một sự lựa chọn tuyệt vời cho mọi người trong ngành công nghệ!",
        "date": "Ngày 23 tháng 1, 2024",
        "avatar": "https://placehold.co/75x75"
      },
      {
        "id": 2,
        "name": "Trần Thị Lan",
        "job": "Chuyên Gia Marketing",
        "text": "Tôi rất ấn tượng với sự chuyên nghiệp và tận tâm của đội ngũ. Họ đã giúp tôi xây dựng chiến lược marketing hiệu quả, mang lại kết quả rõ rệt trong thời gian ngắn. Tôi chắc chắn sẽ tiếp tục hợp tác với họ trong tương lai.",
        "date": "Ngày 23 tháng 1, 2024",
        "avatar": "https://placehold.co/75x75"
      },
      {
        "id": 3,
        "name": "Lê Quang Hòa",
        "job": "Giám Đốc Kinh Doanh",
        "text": "Là một người bận rộn, tôi cần dịch vụ nhanh chóng và hiệu quả. Công ty này đã đáp ứng được tất cả yêu cầu của tôi, từ việc tư vấn đến triển khai công việc. Họ luôn đảm bảo tiến độ và chất lượng, tôi rất hài lòng với kết quả đạt được.",
        "date": "Ngày 23 tháng 1, 2024",
        "avatar": "https://placehold.co/75x75"
      }
    ]
  }


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
         {data.users.map((item)=> {
                    return    <div className="testimonial-card-items">
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
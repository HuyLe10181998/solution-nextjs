import React from "react";

function Service({data}:any) {
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
           {data?.services?.map((item:any,index:number)=>{
            return  <div key={index} className="wow fadeInUp" data-wow-delay=".2s">
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
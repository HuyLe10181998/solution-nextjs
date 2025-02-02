import React from "react";
import { GlobalIcon, PassportIcon, PlayIcon, VisaIcon } from "../assets/icons";

function Banner() {
    return (
        <>
            {/* Cta Banner Section Start */}
            <div className="cta-banner-section bg-cover section-padding" style={{backgroundImage: "url('https://sky-solution.up.railway.app/img/background-move.jpg')"}}>
                <div className="container mx-auto">
                    <div className="cta-banner-wrapper section-padding  pt-0">
                        <div className="video-box">
                            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-buttton ripple video-popup">
                            <div className="h-full w-full flex justify-center items-center">
                            <PlayIcon   />

                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* Feature Icon Box Section Start */}
            <section className="feature-icon-box-area bg-primary-text">
                <div className="container mx-auto">
                    <div className="feature-icon-box-wrapper">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon-box-items">
                                    <div className="icon flex items-center justify-center">
                                        <PassportIcon />
                                    </div>
                                    <div className="content">
                                        <h3>Quy Trình Xin Visa</h3>
                                        <p>Hỗ trợ toàn diện từ khi bắt đầu cho đến khi bạn nhận được visa.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon-box-items active">
                                    <div className="icon flex items-center justify-center">
                                        <VisaIcon />
                                    </div>
                                    <div className="content">
                                        <h3>Tỷ Lệ Phê Duyệt Visa 99%</h3>
                                        <p>Tỷ lệ phê duyệt visa cao giúp bạn an tâm trong hành trình của mình.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon-box-items h-full">
                                    <div className="icon flex items-center justify-center">
                                       <GlobalIcon />
                                    </div>
                                    <div className="content">
                                        <h3>Định Cư Toàn Cầu</h3>
                                        <p>Hỗ trợ định cư ở các quốc gia phát triển và trở thành công dân toàn cầu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
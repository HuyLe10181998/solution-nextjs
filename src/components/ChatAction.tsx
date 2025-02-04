import { getInfo } from "@/actions/info.action";


async function ChatAction() {
    const infoData = await getInfo('user')
    return (
        <section className="cta-chat-section lg:p-20 xl:p-28 p-10">
        <div className="container mx-auto">
            <div className="cta-chat-wrapper">
                <div className="chat-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                        <i className="flaticon-chat"></i>
                    </div>
                    <div className="content">
                        <h3>Hãy Thảo Luận & Bắt Đầu Tư Vấn Visa</h3>
                        <p className="max-w-[500px]">Chúng tôi sẵn sàng hỗ trợ bạn trong việc lựa chọn loại visa phù hợp và hướng dẫn bạn từng bước để đạt được mục tiêu.</p>
                    </div>
                </div>
                <a href={`https://zalo.me/${infoData?.phoneNumber}`} className="theme-btn min-w-[150px] hover:!text-white !text-primary-text !bg-white wow fadeInUp" data-wow-delay=".5s">
                   <span>
                        Lets Get Started
                        <i className="fas fa-chevron-right"></i>
                   </span>
                </a>
            </div>
        </div>
    </section>
    )
}

export default ChatAction;
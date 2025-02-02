import ChatAction from "@/components/ChatAction";

function USA() {
    const data = {
        id: "spain",
        title: "Định cư Tây Ban Nha",
        heading: "<h2>Định cư Tây Ban Nha</h2>",
        image1: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_2_aa9176df7a.jpeg?strip=all&lossy=1&ssl=1",
        image2: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_3_ae3013dc90.jpeg?strip=all&lossy=1&ssl=1",
        flagImage: "https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/TBN_76570d9616.png?strip=all&lossy=1&ssl=1",
        description: "Tây Ban Nha là quốc gia cực kỳ nổi tiếng với nền văn hoá đa dạng. Và khi sở hữu hộ chiếu Tây Ban Nha - visa quyền lực top 3 thế giới, bạn có thể du lịch hoặc công tác tại bất cứ nơi đâu. Thế nên, đây là địa điểm định cư hàng đầu trong lòng cư dân quốc tế.",
        content: {
          "passportPower": {
            "ranking": "Top 3 thế giới",
            "numberOfCountriesVisited": "191"
          },
          "currency": { "currencyUnit": "EUR" },
          "populationDensity": { "density": "94" },
          "flightTimeFromVietnam": { "minTime": "15", "maxTime": "20" },
          "countryArea": { "ranking": "52", "area": "505,992 km²" },
          "rankingOfNationalAssets": {
            "ranking": "16",
            "totalAssets": "($1,421.012B) (2023)"
          },
          "welfarePolicyRanking": { "ranking": "21", "score": "85.35 điểm" },
          "wealthRanking": {
            "ranking": "40",
            "wealthPerCapita": "$31,223.354 (2023)"
          },
          "educationRanking": { "ranking": "18/78" },
          "healthcareRanking": { "ranking": "8" },
          "immigrationRate": { "rate": "15.4% dân số (2021)" },
          "socialIntegrationAndSafety": { "ranking": "33/163" },
          "quota2023": { "quota": "600,000" },
          "livingCosts": {
            "ranking": "40 out of 74",
            "familyLivingCost": "3,169 EUR/tháng",
            "individualLivingCost": "1,569 EUR/tháng"
          },
          "climate": {
            "type": "Khí hậu địa trunghair",
            "highestTemperature": "40ºC",
            "lowestTemperature": "-5ºC",
            "averageTemperatureSummer": "25 - 35ºC",
            "averageTemperatureWinter": "5 - 15ºC"
          }
        },
        advantages: [
          "Miễn thị thực khối Schengen",
          "Giáo dục miễn phí, từ mẫu giáo đến đại học",
          "Sinh sống, làm việc vô thời hạn",
          "Được quyền sử dụng hệ thống chăm sóc sức khỏe công cộng của Tây Ban Nha",
          "Có thể đi cùng gia đình"
        ],
        investmentAndBusinessProgram: [
          "Nền kinh tế mạnh với tỷ lệ thất nghiệp thấp và GDP ngày càng tăng",
          "Nhiều chương trình thị thực và cư trú dành cho các nhà đầu tư và doanh nhân muốn sống và làm việc tại Tây Ban Nha",
          "Thời gian xử lý hồ sơ nhanh, chỉ 2 tháng",
          "Nhà đầu tư có quyền bán lại BĐS đã đầu tư chỉ sau 5 năm (giá trị đến 350.000 EUR)",
          "Không yêu cầu cư trú, trình độ tiếng Anh hay phỏng vấn"
        ],
        workingInSpain: [
          "Nền kinh tế đang phát triển với nhiều cơ hội nghề nghiệp",
          "Được hưởng ít nhất 22 ngày nghỉ phép có lương mỗi năm",
          "Đất nước có hệ thống y tế, giáo dục phát triển",
          "Được tự do di chuyển trong EU",
          "Tây Ban Nha là một quốc gia đa dạng với lịch sử và văn hóa phong phú"
        ]
      };
    return (
        <div className="w-full pt-10">
          {/* Hero Banner Section */}
          <div className="relative h-[300px] w-full overflow-hidden">
            <img 
              src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/USA_4_d3b0948d56.jpeg?strip=all&lossy=1&ssl=1" 
              alt="US Flag with skyscrapers"
              className="w-full h-full object-cover"
            />
          </div>
    
          {/* City Section */}
          <div className="relative mt-8">
            <div className="container mx-auto pt-10">
              <div className="relative">
                <div className="w-full">
                  <img 
                    src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/USA_8_be502cfb4f.jpeg?strip=all&lossy=1&ssl=1" 
                    alt="New York City street with yellow taxis"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
    
                {/* Right side - Content */}
                <div className="absolute bottom-0 left-0">
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/10/us_72cc7bdefa.png?strip=all&lossy=1&ssl=1" 
                      alt="US Flag" 
                      className="w-[20%] object-cover"
                    />
                    <div className="bg-black bg-opacity-50 h-full">
                        <h2 className="text-2xl lg:text-3xl font-medium text-white">Định cư Mỹ</h2>
                    </div>
                  </div>
                 
                </div>
              </div>

           
            </div>
            <div className="mt-10 p-4 bg-primary-background rounded-lg px-20">
            <p className="text-gray-700 leading-relaxed">
                  Với sức mạnh visa top đầu, cùng ngôn ngữ chính là tiếng Anh, Mỹ trở thành "điểm đến" không thể bỏ qua. Với sự đa dạng văn hóa và xã hội, Mỹ luôn là địa điểm nhập cư nổi tiếng. Chính phủ Mỹ cũng đang hỗ trợ hết mình công dân toàn cầu với nhiều chính sách khác nhau.

                  </p>
            </div>


            <div className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-4 px-20">
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/I_Quyen_luc_ho_chieu_b862f7be15-1.webp" alt="Quyền lực hộ chiếu" /></div> <div className="text-primary-text pl-4">Quyền lực hộ chiếu: Top 5 thế giới thế giới, đi được 173 nước</div></div></div>

              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/C_Don_vi_tien_te_032f3679bd.webp" alt="Đơn vị tiền tệ" /></div> <div className="text-primary-text pl-4">Đơn vị tiền tệ: USD</div></div></div>

              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/F_Mat_do_dan_so_e37ecb5913.webp" alt="Mật độ dân số" /></div> <div className="text-primary-text pl-4">Mật độ dân số: 38.6 người/km²</div></div></div>

              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/M_Thoi_gian_bay_tu_VN_424a42ef1c.webp" alt="Thời gian bay từ Việt Nam" /></div> <div className="text-primary-text pl-4">Thời gian bay từ Việt Nam: 16 giờ - 21 giờ</div></div></div>

              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/A_Dien_tich_quoc_gia_42b865c0af.webp" alt="Xếp hạng tổng diện tích quốc gia" /></div> <div className="text-primary-text pl-4">Xếp hạng tổng diện tích quốc gia: Top 4 (9,372,610 km²)</div></div></div>

              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/O_Xep_hang_tong_tai_san_quoc_gia_16c0a5be3b.webp" alt="Xếp hạng tổng tài sản quốc gia:" /></div> <div className="text-primary-text pl-4">Xếp hạng tổng tài sản quốc gia: Top 1 ($26,185.210B) (2023)</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/H_Phuc_loi_xa_hoi_9bdf9ca256.webp" alt="Xếp hạng chính sách phúc lợi xã hội" /></div> <div className="text-primary-text pl-4">Xếp hạng chính sách phúc lợi xã hội: Top 25 (84.65 điểm)</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/B_Do_giau_co_d89069878c.webp" alt="Xếp hạng mức độ giàu có" /></div> <div className="text-primary-text pl-4">Xếp hạng mức độ giàu có :  Top 7 $80,034.581 (2023)</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/D_Giao_duc_6920d1125c.webp" alt="Xếp hạng giáo dục" /></div> <div className="text-primary-text pl-4">Xếp hạng giáo dục :  Top 1/78</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/P_Y_te_73afed5fd1.webp" alt="Xếp hạng y tế" /></div> <div className="text-primary-text pl-4">Xếp hạng y tế: :  Top 30</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/K_So_dan_nhap_cu_7329a66158.webp" alt="Tỷ lệ dân nhập cư" /></div> <div className="text-primary-text pl-4">Tỷ lệ dân nhập cư:  13.6% dân số (2021)</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program"><div><img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/G_Muc_do_an_toan_and_hoa_nhap_xa_hoi_a1a56b8651.webp" alt="Mức độ an toàn và hoà nhập xã hội" /></div> <div className="text-primary-text pl-4">Mức độ an toàn và hoà nhập xã hội :  Top 13.6% dân số (2021)</div></div></div>
              <div className=""><div className="flex w-full bg-primary-background items-center it-program">
              <img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/J_Sinh_hoat_phi_551a98a660.webp" alt="Sinh hoạt phí" />
                <div className="text-primary-text pl-4">Sinh hoạt phí :  Top 8 out of 74. $5,799 USD/tháng cho gia đình (bốn người). $3,468 USD/tháng cho cá nhân</div></div></div>
              <div className="">
                <div className="flex w-full bg-primary-background items-center it-program">
                    <img className="img-fluid w-12 h-12 object-contain" src="/assets/img/immigration/E_Khi_hau_b498f3ce95.webp" alt="Khí hậu" />
                <div className="text-primary-text pl-4">Khí hậu :  Ôn đới ở đa số vùng, nhiệt đới ở số vùng phía Nam. Nhiệt độ cao nhất: 40ºC. Nhiệt độ thấp nhất: -50ºC. Nhiệt độ trung bình: -6 - 20ºC (mùa hè), -6 - 20ºC (mùa đông)</div>
                </div>
                </div>
            </div>


            <div className="!mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 bg-cover bg-center" 
                 style={{backgroundImage: "url('https://eu3amy8g4r5.exactdn.com/wp-content/uploads/2023/11/TBN_2_aa9176df7a.jpeg?strip=all&lossy=1&ssl=1')"}}>
                
                <div className="bg-primary-text/40 p-6 border-r border-primary-background">
                    <h2 className="text-2xl font-bold mb-4 text-primary-title">Lợi ích của thẻ thường trú nhân Mỹ</h2>
                    <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Nộp đơn xin nhập quốc tịch Mỹ</li>
                        <li>Được bảo lãnh thân nhân</li>
                        <li>Ra vào Mỹ không giới hạn số lần và không cần visa</li>
                        <li>Miễn học phí trường công từ tiểu học đến trung học, học phí đại học và cao học bằng 1/3 so với du học sinh</li>
                        <li>Sinh viên được Chính phủ Mỹ cho mượn tiền không lãi (hoặc lãi rất thấp) dài hạn để đóng học phí</li>
                    </ul>
                </div>

                <div className="bg-primary-text/40 p-6 border-r border-primary-background">
                    <h2 className="text-2xl  text-primary-title font-bold mb-4">Vì sao lựa chọn chương trình đầu tư - kinh doanh & định cư tại Mỹ?</h2>
                    <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Nền kinh tế lớn – cường quốc số 1 thế giới</li>
                        <li>Nhiều chính sách ưu đãi cho các doanh nghiệp nước ngoài đến định cư Mỹ</li>
                        <li>Thủ tục xét duyệt nhanh chóng</li>
                        <li>Được hoàn trả 100% khoản đầu tư nếu nhà đầu tư nhận được thẻ Thường Trú Nhân</li>
                        <li>Dễ dàng mở rộng kinh doanh, hợp tác quốc tế</li>
                    </ul>
                </div>

                <div className="bg-primary-text/40 p-6">
                    <h2 className="text-2xl text-primary-title font-bold mb-4">Vì sao lựa chọn làm việc tại Mỹ?</h2>
                    <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Thị trường lao động sôi động, đa dạng văn hóa</li>
                        <li>Phúc lợi tốt cho học sinh, sinh viên (được miễn giảm học phí)</li>
                        <li>Được bảo vệ khi ở nước ngoài</li>
                        <li>Được hưởng trợ cấp xã hội, hỗ trợ y tế</li>
                        <li>Không bị ảnh hưởng bởi các điều luật nhập cư được ban hành sau đó</li>
                    </ul>
                </div>
            </div>

            <div className="">
                <ChatAction />
            </div>
           
          </div>
        </div>
      );
}

export default USA
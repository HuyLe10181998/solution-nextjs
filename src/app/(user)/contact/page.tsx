import { getInfo } from '@/actions/info.action'
import Image from 'next/image'
import Link from 'next/link'

export default async function ContactPage() {
  const infoData = await getInfo("user")
  return (
    <div className="mx-auto pb-12">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative mb-12">
        <Image
          src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Contact Us Hero"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-10">
        {/* Location Text */}
        <div className="text-gray-500 mb-4">We&apos;re in HCM, Viet Nam</div>

        {/* Main Heading */}
        <h1 className="text-4xl font-serif mb-12">Stop by, Say hello</h1>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-medium uppercase mb-2">OPENING HOURS</h4>
              <p>{infoData?.workingDays}</p>
              <p>
                {infoData?.timeStart} - {infoData?.timeEnd}
              </p>
            </div>

            <div>
              <h4 className="font-medium uppercase mb-2">EMAIL:</h4>
              <Link
                href={`mailto:${infoData?.email}`}
                className="text-gray-700 hover:text-black"
              >
                {infoData?.email}
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-medium uppercase mb-2">ADDRESS</h4>
              <p>{infoData?.address}</p>
            </div>

            <div>
              <h4 className="font-medium uppercase mb-2">PHONE:</h4>
              <Link
                href={`tel:${infoData?.phoneNumber}`}
                className="text-gray-700 hover:text-black"
              >
                {infoData?.phoneNumber}
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Message */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Có những lúc bạn cần sự giúp đỡ, đừng ngần ngại liên hệ với chúng
            tôi. Chúng tôi luôn sẵn sàng để giải đáp mọi thắc mắc của bạn.
          </p>
          <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
            <Link
              className="text-white"
              href={`https://zalo.me/${infoData?.phoneNumber}`}
            >
              MESSAGE FOR US
            </Link>
          </button>
        </div>

        {/* Google Map */}
        <div className="mt-12 h-[400px] w-full">
          <iframe
            src={infoData?.mapUrl || ''}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

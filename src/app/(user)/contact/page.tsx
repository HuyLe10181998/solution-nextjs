import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="mx-auto py-12">
      {/* Hero Image */}
      <div className="w-full h-[500px] relative mb-12">
        <Image
          src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Contact Us Hero"
          fill
          className="object-cover"
        />
      </div>
      <div className='px-10'>
          {/* Location Text */}
      <div className="text-gray-500 mb-4">
        We&apos;re in HCM, Viet Nam
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-serif mb-12">Stop by, Say hello</h1>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h4 className="font-medium uppercase mb-2">OPENING HOURS</h4>
            <p>Tuesday to Saturday</p>
            <p>11am to 6pm.</p>
          </div>

          <div>
            <h4 className="font-medium uppercase mb-2">EMAIL:</h4>
            <Link href="mailto:info@zashadu.com" className="text-gray-700 hover:text-black">
              info@zashadu.com
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h4 className="font-medium uppercase mb-2">ADDRESS</h4>
            <p>No. 22 Adeleke Adedoyin Street, off</p>
            <p>Kofo Abayomi, Victoria Island, Lagos.</p>
          </div>

          <div>
            <h4 className="font-medium uppercase mb-2">PHONE:</h4>
            <Link href="tel:+2348183762678" className="text-gray-700 hover:text-black">
              (+234) 818 376 2678
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Message */}
      <div className="max-w-2xl">
        <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
        Có những lúc bạn cần sự giúp đỡ, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng để giải đáp mọi thắc mắc của bạn.
        </p>
        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
            <Link className='text-white' href="https://zalo.me/0935403364">
          MESSAGE FOR US

            </Link>
        </button>
      </div>

      {/* Google Map */}
      <div className="mt-12 h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7304446791465!2d3.4216!3d6.4297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f976b5a895%3A0x3f62c9dbd5ca45e6!2s22%20Adeleke%20Adedoyin%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1624461234567!5m2!1sen!2sng"
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
import ContactInfoCard from '../components/ContactInfoCard'

const contactInfo = [
  { icon: '📍', title: 'Address', children: <>No 3 Ayuba Madaki Close<br />Rigasa New Extension<br />Kaduna</> },
  { icon: '📞', title: 'Phone', children: <>Main Office: 08035598876, 09038587829<br /><a href="tel:08035598876" className="text-blue-600 hover:text-blue-800">Call now</a></> },
  { icon: '✉️', title: 'Email', children: <a href="mailto:denoblescholarsacademy@gmail.com" className="text-blue-600 hover:text-blue-800">denoblescholarsacademy@gmail.com</a> },
  { icon: '🕒', title: 'Office Hours', children: <>Monday - Friday<br />8:00 AM - 3:00 PM</> }
]

export default function Contact() {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-800 mobile-fade-in">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-6 text-gray-800 mobile-slide-up">Send Us a Message</h2>
            <form action="https://formbold.com/s/6M2d5" method="POST" className="bg-white p-3 md:p-6 rounded-lg shadow-md space-y-3 md:space-y-6 mobile-scale-in">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Name</label>
                <input type="text" name="name" className="w-full px-3 md:px-4 py-2 md:py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mobile-hover" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email</label>
                <input type="email" name="email" className="w-full px-3 md:px-4 py-2 md:py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mobile-hover" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Subject</label>
                <input type="text" name="subject" className="w-full px-3 md:px-4 py-2 md:py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mobile-hover" placeholder="Subject" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Message</label>
                <textarea name="message" className="w-full px-3 md:px-4 py-2 md:py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-20 md:h-32 mobile-hover" placeholder="Type your message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 md:py-3 px-3 md:px-6 rounded-lg hover:bg-blue-800 transition text-sm md:text-base mobile-scale-in">Send Message</button>
            </form>
          </div>

          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-6 text-gray-800 mobile-slide-up">Get in Touch</h2>
            <div className="space-y-3 md:space-y-6 mb-4 md:mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="mobile-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ContactInfoCard icon={info.icon} title={info.title}>
                    {info.children}
                  </ContactInfoCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

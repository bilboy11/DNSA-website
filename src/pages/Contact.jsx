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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form action="https://formbold.com/s/6M2d5" method="POST" className="bg-white p-4 md:p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input type="text" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Subject" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea name="message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32" placeholder="Type your message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition">Send Message</button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, i) => (
                <ContactInfoCard key={i} icon={info.icon} title={info.title}>
                  {info.children}
                </ContactInfoCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <section className="py-8 md:py-12 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center animate-fade-in-down">Find Us on Google Maps</h2>
          <div className="rounded-lg overflow-hidden shadow-lg animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.123456789!2d7.440123456!3d10.512345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzQ0LjAiTiA3wrAyNycyNi40IkU!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full hover:shadow-xl transition-all duration-300"
              title="De Noble Scholars Academy Location"
            ></iframe>
          </div>
          <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> No 3 Ayuba Maraki Close, Kabala Doki, Kaduna 800283, Kaduna
            </p>
            <a 
              href="https://maps.google.com/?q=3+Ayuba+Maraki+Close,+Kabala+Doki,+Kaduna+800283,+Kaduna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 animate-slide-up-fade"
              style={{ animationDelay: '0.6s' }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

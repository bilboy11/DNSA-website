import ContactInfoCard from '../components/ContactInfoCard'

const contactInfo = [
  { icon: '📍', title: 'Address', children: <>No 13 Ayuba Madaki Close<br />Rigasa New Extension<br />Kaduna</> },
  { icon: '📞', title: 'Phone', children: <>Main Office: 08035598876<br /><a href="tel:08035598876" className="text-blue-600 hover:text-blue-800">Call now</a></> },
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
            <form className="bg-white p-4 md:p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32" placeholder="Your Message" required></textarea>
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
    </div>
  )
}

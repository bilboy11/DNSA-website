export default function News() {
  const events = [
    {
      title: "Annual Color Day Celebration",
      description: "A burst of colors and creativity! Students showcase bright projects and fun experiments to celebrate Color Day.",
      type: "Event"
    },
    {
      title: "Excursion to Hospital",
      description: "Visitation to Yusuf Dan Tsoho on kindness day.",
      type: "News"
    },
    {
      title: "Spring Musical: The Sound of Music",
      date: "April 10-12, 2024",
      description: "Our talented drama department presents this classic musical. Tickets available now.",
      type: "Event"
    },
    {
      title: "College Fair 2024",
      date: "March 25, 2024",
      description: "Over 50 colleges and universities will be represented. Juniors and seniors encouraged to attend.",
      type: "Event"
    },
    {
      title: "Student Achievements Recognized",
      date: "February 5, 2024",
      description: "Congratulations to our students who won regional academic competitions this semester.",
      type: "News"
    },
    {
      title: "Parent-Teacher Conferences",
      date: "March 28-29, 2024",
      description: "Schedule your appointment to discuss your child's progress with teachers.",
      type: "Event"
    }
  ]

  const galleryImages = ['CD1.jpeg','CD2.jpeg','CD3.jpeg','CD4.jpeg','CD5.jpeg','CD6.jpeg','CD7.jpeg','CD8.jpeg','CD9.jpeg','CD10.jpeg','CD11.jpeg','CD12.jpeg','CD13.jpeg','CD14.jpeg','CD15.jpeg']
  const excursionImages = ['E2.jpeg','E3.jpeg','E4.jpeg','E5.jpeg','E6.jpeg','E7.jpeg']

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">News & Events</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {events.slice(0, 1).map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`p-3 md:p-4 ${item.type === 'Event' ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
                <span className="text-xs md:text-sm font-semibold uppercase">{item.type}</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{item.date}</p>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Gallery (scrollable) */}
      <section className="w-full bg-gray-50 mt-8">
        <div className="mx-auto max-w-7xl px-2 md:px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded overflow-hidden shadow-sm">
                <img
                  src={`/news/${img}`}
                  alt={`Gallery ${i+1}`}
                  loading="lazy"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover gallery-animate gallery-fade"
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {events.slice(1, 2).map((item, index) => (
            <div key={index + 1} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`p-3 md:p-4 ${item.type === 'Event' ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
                <span className="text-xs md:text-sm font-semibold uppercase">{item.type}</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{item.date}</p>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Excursion Gallery */}
      <section className="w-full bg-gray-50 mt-8">
        <div className="mx-auto max-w-7xl px-2 md:px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {excursionImages.map((img, i) => (
              <div key={i} className="rounded overflow-hidden shadow-sm">
                <img
                  src={`/news/${img}`}
                  alt={`Excursion ${i+1}`}
                  loading="lazy"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover gallery-animate gallery-fade"
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {events.slice(2).map((item, index) => (
            <div key={index + 2} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`p-3 md:p-4 ${item.type === 'Event' ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
                <span className="text-xs md:text-sm font-semibold uppercase">{item.type}</span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{item.date}</p>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

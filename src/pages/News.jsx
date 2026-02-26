import EventCard from '../components/EventCard'
import Gallery from '../components/Gallery'

export default function News() {
  const events = [
    { title: "Annual Color Day Celebration", description: "A burst of colors and creativity! Students showcase bright projects and fun experiments to celebrate Color Day.", type: "Event" },
    { title: "Excursion to Hospital", description: "Visitation to Yusuf Dan Tsoho on kindness day.", type: "News" },
    { title: "Indomie Company Visit Primary Section", description: "Our primary students had an exciting visit from Indomie Company, learning about their products and operations.", type: "Event" },
    { title: "Speech and Prize Giving Day", description: "A special event to celebrate and reward our students' achievements and excellence.", type: "Event" },
    { title: "Student Recognition and School Awards", description: "Congratulations to our students who won competitions and received school awards.", type: "News" },
    { title: "Annual Sport Day", description: "Our Annual Sports Day was filled with exciting competitions, outstanding performances, and memorable moments on the field.", type: "Event" }
  ]

  const eventGalleryMap = {
    0: { images: ['CD1.jpeg','CD2.jpeg','CD3.jpeg','CD4.jpeg','CD5.jpeg','CD6.jpeg','CD7.jpeg','CD8.jpeg','CD9.jpeg','CD10.jpeg','CD11.jpeg','CD12.jpeg','CD13.jpeg','CD14.jpeg','CD15.jpeg'], folder: '/news', altPrefix: 'Gallery' },
    1: { images: ['E2.jpeg','E3.jpeg','E4.jpeg','E5.jpeg','E6.jpeg','E7.jpeg'], folder: '/news', altPrefix: 'Excursion' },
    2: { images: ['IPS1.jpeg','IPS2.jpeg','IPS3.jpeg','IPS4.jpeg'], folder: '/news', altPrefix: 'Indomie Visit' },
    5: { images: ['SD1.jpeg','SD2.jpeg','SD3.jpeg','SD4.jpeg','SD5.jpeg','SD6.jpeg','SD7.jpeg','SD8.jpeg','SD9.jpeg','SD10.jpeg'], folder: '/Annual Sport Day', altPrefix: 'Annual Sport Day', cols: 'lg:grid-cols-5' }
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800 animate-fade-in-down">News & Events</h1>
      </div>

      {events.map((event, index) => (
        <div key={index}>
          <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <EventCard item={event} index={index} />
            </div>
          </div>
          {eventGalleryMap[index] && <Gallery {...eventGalleryMap[index]} />}
        </div>
      ))}
    </div>
  )
}

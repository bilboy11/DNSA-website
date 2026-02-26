export default function EventCard({ item, index = 0 }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={`p-3 md:p-4 ${item.type === 'Event' ? 'bg-blue-600' : 'bg-green-600'} text-white`}>
        <span className="text-xs md:text-sm font-semibold uppercase">{item.type}</span>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
        {item.date && <p className="text-gray-500 text-xs md:text-sm mb-3">{item.date}</p>}
        <p className="text-sm md:text-base text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}

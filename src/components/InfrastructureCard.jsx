export default function InfrastructureCard({ image, title, description, delay = '0.1s' }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-up-fade" style={{ animationDelay: delay }}>
      <div className="h-40 md:h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

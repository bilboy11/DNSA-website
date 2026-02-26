export default function ProgramCard({ title, description, delay = '0.1s' }) {
  return (
    <div className="border-l-4 border-blue-600 pl-4 md:pl-6 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] p-4 rounded transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: delay }}>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
      <a href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">Learn More →</a>
    </div>
  )
}

export default function InfoCard({ icon, title, description, borderColor = 'blue', delay = '0.3s' }) {
  const colors = {
    blue: 'border-blue-600',
    green: 'border-green-600',
    purple: 'border-purple-600',
    orange: 'border-orange-600'
  }
  
  return (
    <div className={`bg-white border-l-4 ${colors[borderColor]} p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade`} style={{ animationDelay: delay }}>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 flex items-center">
        <span className="text-2xl mr-3">{icon}</span>
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="space-y-2 text-sm md:text-base text-gray-600">
          {description.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="text-blue-600 mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">{description}</p>
      )}
    </div>
  )
}

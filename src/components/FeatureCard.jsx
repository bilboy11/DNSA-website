export default function FeatureCard({ icon, title, description, delay = '0.1s' }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: delay }}>
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  )
}

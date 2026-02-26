export default function ContactInfoCard({ icon, title, children }) {
  return (
    <div className="flex items-start bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-3xl md:text-4xl mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1 text-lg">{title}</h3>
        <div className="text-sm md:text-base text-gray-600">{children}</div>
      </div>
    </div>
  )
}

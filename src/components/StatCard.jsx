export default function StatCard({ value, label, delay = '0.1s' }) {
  return (
    <div className="animate-scale-in text-center" style={{ animationDelay: delay }}>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm md:text-base text-blue-200">{label}</div>
    </div>
  )
}

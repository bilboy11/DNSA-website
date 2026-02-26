export default function Section({ title, subtitle, children, bg = 'bg-white', py = 'py-12 md:py-16' }) {
  return (
    <section className={`${py} ${bg}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

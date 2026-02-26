export default function Gallery({ images, folder = '/news', altPrefix = 'Gallery', cols = 'lg:grid-cols-6' }) {
  return (
    <section className="w-full bg-gray-50 mt-8 animate-fade-in">
      <div className="mx-auto max-w-7xl px-2 md:px-4 py-6">
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${cols} gap-2`}>
          {images.map((img, i) => (
            <div key={i} className="rounded overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={`${folder}/${img}`}
                alt={`${altPrefix} ${i+1}`}
                loading="lazy"
                className="w-full h-32 sm:h-40 md:h-48 object-cover gallery-animate gallery-fade"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

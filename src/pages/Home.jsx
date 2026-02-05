export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-down">Welcome to De Noble Scholars Academy</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Education is Light
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl mb-4">🎓</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Excellence in Education</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our curriculum is designed to challenge and inspire students to reach their highest potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl mb-4">👥</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Experienced Teachers</h3>
              <p className="text-sm md:text-base text-gray-600">
                Learn from passionate educators dedicated to your success and growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl mb-4">🌟</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">Modern Facilities</h3>
              <p className="text-sm md:text-base text-gray-600">
                State-of-the-art classrooms, labs, and resources to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">About De Noble Scholars Academy</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                De Noble Scholars Academy is a premier educational institution dedicated to nurturing young minds 
                and preparing students for success in an ever-changing world. Founded on the principle that 
                "Education is Light," we strive to illuminate the path to academic excellence, character 
                development, and lifelong learning.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Our school provides a comprehensive educational experience that combines rigorous academics 
                with holistic development. We believe in fostering critical thinking, creativity, and 
                innovation while instilling strong values and a sense of community responsibility in our students.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                With state-of-the-art classrooms, experienced teachers, and a commitment to excellence, 
                De Noble Scholars Academy creates an environment where every student can thrive and reach 
                their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white border-l-4 border-blue-600 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Our Mission
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To provide exceptional education that empowers students to become confident, 
                  responsible, and successful individuals who contribute positively to society.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  Our Vision
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, 
                  innovative teaching methods, and the holistic development of well-rounded students.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="text-2xl mr-3">💎</span>
                  Our Values
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-600">
                  <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Integrity & Honesty</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Respect & Empathy</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Excellence & Innovation</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">•</span> Community & Service</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-orange-600 p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 flex items-center">
                  <span className="text-2xl mr-3">🏆</span>
                  Our Commitment
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We are committed to providing a safe, inclusive, and nurturing environment where 
                  every student feels valued and supported in their educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">Meet Our Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Owner Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src="/CEO.png" alt="School Owner" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Owner Bio */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Our Visionary Leader</h3>
              <p className="text-lg md:text-xl font-semibold text-blue-900 mb-4">
                Hajiya Hadiza Ismail
              </p>
              <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
                Replace this text with information about the school's founder and their vision for education. 
                Share their background, achievements, and the philosophy that drives De Noble Scholars Academy.
              </p>
              <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
                Add more details about their educational background, experience in the field, and commitment 
                to excellence and student development.
              </p>
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-2">Key Focus Areas:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center animate-fade-in" style={{ animationDelay: '0.1s' }}><span className="text-blue-600 mr-3">✓</span> Academic Excellence</li>
                  <li className="flex items-center animate-fade-in" style={{ animationDelay: '0.2s' }}><span className="text-blue-600 mr-3">✓</span> Character Development</li>
                  <li className="flex items-center animate-fade-in" style={{ animationDelay: '0.3s' }}><span className="text-blue-600 mr-3">✓</span> Innovation & Creativity</li>
                  <li className="flex items-center animate-fade-in" style={{ animationDelay: '0.4s' }}><span className="text-blue-600 mr-3">✓</span> Community Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="border-l-4 border-blue-600 pl-4 md:pl-6 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] p-4 rounded transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Kindergarten and Nursery School</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Building strong foundations in montessori learning and early childhood development.
              </p>
              <a href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">
                Learn More →
              </a>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 md:pl-6 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] p-4 rounded transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Basic School</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Exploring diverse subjects and developing independence and leadership skills.
              </p>
              <a href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">
                Learn More →
              </a>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 md:pl-6 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] p-4 rounded transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Secondary School</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                College-preparatory curriculum with advanced placement and honors courses.
              </p>
              <a href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">
                Learn More →
              </a>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 md:pl-6 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] p-4 rounded transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Extracurriculars</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Sports, arts, culture, clubs, and community service opportunities for well-rounded development.
              </p>
              <a href="/academics" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm md:text-base text-blue-200">Graduation Rate</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
              <div className="text-sm md:text-base text-blue-200">Students</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">60+</div>
              <div className="text-sm md:text-base text-blue-200">Staff</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* School Infrastructure Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 animate-fade-in-down">Our Facilities & Infrastructure</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto animate-fade-in">
            De Noble Scholars Academy is equipped with world-class facilities designed to support 
            comprehensive educational and personal development of our students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Infrastructure Item 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
              <div className="h-40 md:h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/Classroom.png" alt="Modern Classrooms" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Modern Classrooms</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Spacious, well-ventilated, and equipped with modern educational technology and interactive learning tools.
                </p>
              </div>
            </div>

            {/* Infrastructure Item 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 md:h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/Lab.png" alt="Science & Tech Labs" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Science & Tech Labs</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Fully equipped laboratories for physics, chemistry, biology, and computer science experiments.
                </p>
              </div>
            </div>

            {/* Infrastructure Item 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
              <div className="h-40 md:h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/Library.png" alt="Library & Learning Center" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Library & Learning Center</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Extensive collection of books, digital resources, and quiet study spaces for research and reading.
                </p>
              </div>
            </div>

            {/* Infrastructure Item 4 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              <div className="h-40 md:h-48 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/sports.png" alt="Sports Facilities" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Sports Facilities</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Basketball court, football field, volleyball court, and training equipment for athletic development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 animate-fade-in-down">Ready to Join Us?</h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take the first step towards an exceptional education. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-blue-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-sm md:text-base animate-slide-up-fade" 
              style={{ animationDelay: '0.3s' }}
            >
              Contact Us
            </a>
            <a 
              href="/academics" 
              className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-sm md:text-base animate-slide-up-fade"
              style={{ animationDelay: '0.4s' }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

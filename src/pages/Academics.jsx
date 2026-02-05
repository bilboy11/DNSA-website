export default function Academics() {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800 animate-fade-in-down">Academics</h1>
        
        <section className="mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gray-800">Our Academic Philosophy</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            At De Noble Scholars Academy, we believe in fostering critical thinking, creativity, and 
            a lifelong love of learning. Our curriculum is designed to challenge students while 
            providing the support they need to succeed.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white border-l-4 border-blue-600 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Kindergarten and Nursery School</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Our elementary program focuses on building strong foundations in montessori learning and early childhood development.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
              <li>Language Arts & Reading</li>
              <li>Mathematics</li>
              <li>Phonics</li>
              <li>Social Studies</li>
              <li>Reading & Writing</li>
             </ul>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Basic School</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Middle school students explore a wider range of subjects and begin to develop 
              independence and critical thinking skills.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
              <li>English Language </li>
              <li>Mathematics (Pre-Algebra, Algebra)</li>
              <li>Life & Physical Sciences</li>
              <li>History</li>
              <li>Computer Science & Technology</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Secondary School</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Our high school program prepares students for college and beyond with rigorous 
              coursework and advanced placement opportunities.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
              <li>Advanced Mathematics (AP) Courses</li>
              <li>Honors Programs</li>
              <li>College Counseling</li>
              <li>Vocal Skills</li>
              <li>Career Exploration</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-blue-600 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Extracurriculars</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Beyond the core curriculum, we offer specialized programs to enrich the 
              educational experience.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
              <li>Sports</li>
              <li>Art and Culture</li>
              <li>Spelling Bee Programs</li>
              <li>Color and Creative Day</li>
              <li>Fruit Day</li>
            </ul>
          </div>
        </div>

        <section className="bg-gray-50 p-6 md:p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Academic Calendar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-bold text-gray-800 mb-2">First Term</h3>
              <p className="text-sm md:text-base text-gray-600">September - December</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-bold text-gray-800 mb-2">Second Term</h3>
              <p className="text-sm md:text-base text-gray-600">January - April</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-bold text-gray-800 mb-2">Third Term</h3>
              <p className="text-sm md:text-base text-gray-600">April - July</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: '0.9s' }}>
              <h3 className="font-bold text-gray-800 mb-2">Holidays & Breaks</h3>
              <p className="text-sm md:text-base text-gray-600">Summer, Winter, Festive Breaks</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

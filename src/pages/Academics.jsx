import InfoCard from '../components/InfoCard'

const programs = [
  { title: 'Kindergarten and Nursery School', description: 'Our elementary program focuses on building strong foundations in montessori learning and early childhood development.', items: ['Language Arts & Reading', 'Mathematics', 'Phonics', 'Social Studies', 'Reading & Writing'] },
  { title: 'Basic School', description: 'Middle school students explore a wider range of subjects and begin to develop independence and critical thinking skills.', items: ['English Language', 'Mathematics (Pre-Algebra, Algebra)', 'Life & Physical Sciences', 'History', 'Computer Science & Technology'] },
  { title: 'Secondary School', description: 'Our high school program prepares students for college and beyond with rigorous coursework and advanced placement opportunities.', items: ['Advanced Mathematics (AP) Courses', 'Honors Programs', 'College Counseling', 'Vocal Skills', 'Career Exploration'] },
  { title: 'Extracurriculars', description: 'Beyond the core curriculum, we offer specialized programs to enrich the educational experience.', items: ['Sports', 'Art and Culture', 'Spelling Bee Programs', 'Color and Creative Day', 'Fruit Day'] }
]

const calendar = [
  { title: 'First Term', period: 'September - December' },
  { title: 'Second Term', period: 'January - April' },
  { title: 'Third Term', period: 'April - July' },
  { title: 'Holidays & Breaks', period: 'Summer, Winter, Festive Breaks' }
]

export default function Academics() {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800 animate-fade-in-down">Academics</h1>
        
        <section className="mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gray-800">Our Academic Philosophy</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            At De Noble Scholars Academy, we believe in fostering critical thinking, creativity, and a lifelong love of learning. Our curriculum is designed to challenge students while providing the support they need to succeed.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {programs.map((p, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-600 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">{p.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">{p.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-600">
                {p.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <section className="bg-gray-50 p-6 md:p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Academic Calendar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {calendar.map((term, i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-fade" style={{ animationDelay: `${(i + 6) * 0.1}s` }}>
                <h3 className="font-bold text-gray-800 mb-2">{term.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{term.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

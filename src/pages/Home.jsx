import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import InfoCard from '../components/InfoCard'
import ProgramCard from '../components/ProgramCard'
import StatCard from '../components/StatCard'
import InfrastructureCard from '../components/InfrastructureCard'

const aboutTexts = [
  "De Noble Scholars Academy was established in September 2007 with just five pupils, three teachers, a security officer, and a nanny. It was founded with the sole aim of providing quality education and promoting excellence in learning. From its humble beginnings, the school has remained committed to building a strong academic foundation for its students.",
  "The academy is dedicated to creating a conducive learning environment that nurtures learners into becoming self-reliant, responsible, and valuable leaders in society. Guided by the principle that \"Education is Light\", the school seeks to illuminate the path toward academic excellence, character development, and lifelong learning.",
  "All sections of the school maintain healthy competition in pursuit of academic excellence. This culture of achievement has contributed to a steady increase in student enrollment each year, fueled by the growing interest and aspirations of the community.",
  "De Noble Scholars Academy provides a comprehensive educational experience that blends rigorous academics with holistic development. With experienced teachers, well-equipped classrooms, and a commitment to innovation, creativity, and strong moral values, the school ensures that every student is empowered to thrive and reach their full potential in an ever-changing world."
]

const features = [
  { icon: '🎓', title: 'Excellence in Education', description: 'Our curriculum is designed to challenge and inspire students to reach their highest potential.' },
  { icon: '👥', title: 'Experienced Teachers', description: 'Learn from passionate educators dedicated to your success and growth.' },
  { icon: '🌟', title: 'Modern Facilities', description: 'State-of-the-art classrooms, labs, and resources to enhance your learning experience.' }
]

const programs = [
  { title: 'Kindergarten and Nursery School', description: 'Building strong foundations in montessori learning and early childhood development.' },
  { title: 'Basic School', description: 'Exploring diverse subjects and developing independence and leadership skills.' },
  { title: 'Secondary School', description: 'College-preparatory curriculum with advanced placement and honors courses.' },
  { title: 'Extracurriculars', description: 'Sports, arts, culture, clubs, and community service opportunities for well-rounded development.' }
]

const stats = [
  { value: '95%', label: 'Graduation Rate' },
  { value: '2000+', label: 'Students' },
  { value: '60+', label: 'Staff' },
  { value: '10+', label: 'Years of Excellence' }
]

const infrastructure = [
  { image: '/Classroom.png', title: 'Modern Classrooms', description: 'Spacious, well-ventilated, and equipped with modern educational technology and interactive learning tools.' },
  { image: '/Lab.png', title: 'Science & Tech Labs', description: 'Fully equipped laboratories for physics, chemistry, biology, and computer science experiments.' },
  { image: '/Library.png', title: 'Library & Learning Center', description: 'Extensive collection of books, digital resources, and quiet study spaces for research and reading.' },
  { image: '/sports.png', title: 'Sports Facilities', description: 'Basketball court, football field, volleyball court, and training equipment for athletic development.' }
]

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-down">Welcome to De Noble Scholars Academy</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>Education is Light</p>
        </div>
      </section>

      <Section title="Why Choose Us?" bg="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} delay={`${(i + 1) * 0.1}s`} />)}
        </div>
      </Section>

      <Section title="About De Noble Scholars Academy">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {aboutTexts.map((text, i) => (
              <p key={i} className={`text-base md:text-lg text-gray-700 leading-relaxed text-justify ${i < aboutTexts.length - 1 ? 'mb-4' : ''}`}>
                {text}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InfoCard icon="🎯" title="Our Mission" description="To provide exceptional education that empowers students to become confident, responsible, and successful individuals who contribute positively to society." borderColor="blue" delay="0.3s" />
            <InfoCard icon="✨" title="Our Vision" description="To be a leading educational institution recognized for academic excellence, innovative teaching methods, and the holistic development of well-rounded students." borderColor="green" delay="0.4s" />
            <InfoCard icon="💎" title="Our Values" description={['Integrity & Honesty', 'Respect & Empathy', 'Excellence & Innovation', 'Community & Service']} borderColor="purple" delay="0.5s" />
            <InfoCard icon="🏆" title="Our Commitment" description="We are committed to providing a safe, inclusive, and nurturing environment where every student feels valued and supported in their educational journey." borderColor="orange" delay="0.6s" />
          </div>
        </div>
      </Section>

      <Section title="Meet Our Founder" bg="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center animate-slide-in-left">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img src="/CEO.png" alt="School Owner" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Our Visionary Leader</h3>
            <p className="text-lg md:text-xl font-semibold text-blue-900 mb-4">Hajiya Hadiza Ismail</p>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
              Replace this text with information about the school's founder and their vision for education. Share their background, achievements, and the philosophy that drives De Noble Scholars Academy.
            </p>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
              Add more details about their educational background, experience in the field, and commitment to excellence and student development.
            </p>
            <div className="mt-6">
              <h4 className="font-bold text-gray-800 mb-2">Key Focus Areas:</h4>
              <ul className="space-y-2 text-gray-600">
                {['Academic Excellence', 'Character Development', 'Innovation & Creativity', 'Community Service'].map((item, i) => (
                  <li key={i} className="flex items-center animate-fade-in" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                    <span className="text-blue-600 mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Programs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {programs.map((p, i) => <ProgramCard key={i} {...p} delay={`${(i + 1) * 0.1}s`} />)}
        </div>
      </Section>

      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => <StatCard key={i} {...s} delay={`${(i + 1) * 0.1}s`} />)}
          </div>
        </div>
      </section>

      <Section title="Our Facilities & Infrastructure" subtitle="De Noble Scholars Academy is equipped with world-class facilities designed to support comprehensive educational and personal development of our students.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {infrastructure.map((infra, i) => <InfrastructureCard key={i} {...infra} delay={`${(i + 1) * 0.1}s`} />)}
        </div>
      </Section>

      <Section title="Ready to Join Us?" bg="bg-gray-100" py="py-12 md:py-16">
        <div className="text-center">
          <p className="text-gray-600 mb-8 text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take the first step towards an exceptional education. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-blue-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-sm md:text-base animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>Contact Us</a>
            <a href="/academics" className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-sm md:text-base animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>Learn More</a>
          </div>
        </div>
      </Section>
    </div>
  )
}

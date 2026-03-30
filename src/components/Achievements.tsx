import { Trophy, Star, Zap, Award, Lightbulb, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Top Performer',
    category: 'Capstone Project',
    period: '2023 - 2024',
    icon: Trophy,
    description: 'Outstanding performance in the Intelligent Residential Vehicle Control System capstone project, demonstrating exceptional problem-solving and development skills.',
    badge: 'Capstone',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Top Performer',
    category: 'System Integration Architecture',
    period: '2023 - 2024',
    icon: Zap,
    description: 'Recognized for excellence in system integration and architectural design, showcasing advanced technical knowledge and innovative solutions.',
    badge: 'Architecture',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Top Performer',
    category: 'Visual Graphic Design',
    period: '2023 - 2024',
    icon: Star,
    description: 'Awarded for outstanding visual design and graphic creation skills, combining aesthetics with functional user interface design.',
    badge: 'Design',
    color: 'from-pink-400 to-rose-500'
  },
  {
    title: 'Top Performer',
    category: 'Computer Programming',
    period: '2023 - 2024',
    icon: Lightbulb,
    description: 'Recognized for exceptional coding skills, algorithmic thinking, and ability to build efficient, scalable software solutions.',
    badge: 'Programming',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Academic Distinction',
    category: 'Award',
    period: '2024 - 2025',
    icon: Medal,
    description: 'Honored for maintaining academic excellence and outstanding performance throughout the current academic year.',
    badge: 'Academic',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Best in Technopreneurship',
    category: 'Award',
    period: '2024 - 2025',
    icon: Award,
    description: 'Recognized as the best in technopreneurship for innovative thinking and entrepreneurial spirit in technology ventures.',
    badge: 'Entrepreneurship',
    color: 'from-red-400 to-pink-500'
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 text-center block w-full -ml-6">
            <Award className="inline w-8 h-8 mr-2" /> Achievements & Awards
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
            Recognition for outstanding performance and innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative h-full"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 transform group-hover:scale-110`}></div>

              {/* Main card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-all duration-300 h-full flex flex-col group-hover:shadow-2xl dark:group-hover:shadow-2xl transform group-hover:-translate-y-3 animate-fade-in">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300`}>
                  <achievement.icon size={32} />
                </div>

                {/* Badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white w-fit mb-4`}>
                  {achievement.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Category */}
                <p className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${achievement.color} mb-3`}>
                  {achievement.category}
                </p>

                {/* Period */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {achievement.period}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {achievement.description}
                </p>

                {/* Footer decoration */}
                <div className={`pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between`}>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Award
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i <= 5
                            ? `text-transparent bg-clip-text bg-gradient-to-r ${achievement.color}`
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill={i <= 5 ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Award size={28} className="text-blue-600 dark:text-blue-400" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Contact Center Servicing NC II', issued: '2024' },
              { title: 'Computer System Servicing NC II', issued: '2024' },
              { title: 'Visual Graphic Design Certification', issued: '2024' }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 transition transform group hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 flex-shrink-0 group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition">
                    <Trophy size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Issued • {cert.issued}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 mb-2 group-hover:scale-110 transition">
              6
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Top Performer Awards</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2 group-hover:scale-110 transition">
              3
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Professional Certifications</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 mb-2 group-hover:scale-110 transition">
              9
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Fields of Recognition</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 mb-2 group-hover:scale-110 transition">
              100%
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

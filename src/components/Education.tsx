import { GraduationCap, BookOpen, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Infotech College of Arts and Sciences',
    location: 'Parañaque City',
    period: '2024 - 2025',
    description: 'Bachelor of Science in Information Technology graduate with a strong foundation in web development and system integration. Experienced in building real-world, scalable applications and ready to contribute effectively in a professional environment.',
    icon: Award,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    degree: 'Secondary School',
    school: 'Parañaque National High School Main',
    location: 'Parañaque City',
    period: '2021 - 2022',
    description: 'Completed secondary education with academic excellence',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500'
  },
  {
    degree: 'Elementary School',
    school: 'San Dionisio Elementary School',
    location: 'Parañaque City',
    period: '2014 - 2015',
    description: 'Foundation of academic journey',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-500'
  },
];

export default function Education() {
  return (  
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 text-center block w-full -ml-6">
            <GraduationCap className="inline w-8 h-8 mr-2" /> Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
            My Academic Journey
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-5 rounded-bl-2xl group-hover:opacity-10 transition duration-500`}></div>

              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* Timeline dot - LEFT SIDE */}
                <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} ring-4 ring-white dark:ring-gray-800`}></div>
                  <div className={`w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-600 dark:to-gray-700`}></div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} text-white flex-shrink-0 mt-1`}>
                      <edu.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.period}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              BS IT
            </div>
            <p className="text-gray-600 dark:text-gray-400">Current Degree</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              10+
            </div>
            <p className="text-gray-600 dark:text-gray-400">Years Learning</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              3
            </div>
            <p className="text-gray-600 dark:text-gray-400">Educational Milestones</p>
          </div>
        </div>
      </div>
    </section>
  );
}

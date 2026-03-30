import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'Data Encoder/Technical Support',
    company: 'JLA Diagnostics',
    period: 'February 2025 - August 2025',
    duration: '6 months',
    type: 'Internship',
    location: 'On-site',
    description: 'Data management and technical support specialist',
    responsibilities: [
      'Accurately entered and updated data into company databases and systems',
      'Ensured data integrity and confidentiality',
      'Troubleshooting and system maintenance',
      'Provided technical support to team members',
      'Maintained database records and documentation'
    ],
    skills: ['Database Management', 'Technical Support', 'Data Entry', 'System Maintenance'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Tech Support',
    company: 'Transient Manpower Services, Inc.',
    period: 'June 2024 - August 2024',
    duration: '3 months',
    type: 'Internship',
    location: 'On-site',
    description: 'Digital and physical records management and technical support',
    responsibilities: [
      'Organized and maintained digital and physical records',
      'Facilitated quick access and retrieval of information',
      'Provided technical support to clients',
      'Managed filing systems and documentation',
      'Resolved technical issues and user concerns'
    ],
    skills: ['Records Management', 'Technical Support', 'Organization', 'Problem Solving'],
    color: 'from-blue-500 to-cyan-500'
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <Briefcase className="inline w-8 h-8 mr-2" /> Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional internship journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-2xl animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${exp.color} opacity-5 rounded-bl-3xl group-hover:opacity-10 transition duration-500`}></div>

              <div className="relative">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white flex-shrink-0`}>
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                    {exp.type}
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-500 font-medium">
                    Duration: {exp.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle size={20} className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`} />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 grid md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-700/30 rounded-lg">
                        <span className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color}`}></span>
                        <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white opacity-90 hover:opacity-100 transition`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 group-hover:scale-110 transition">
              2
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Internships Completed</p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 group-hover:scale-110 transition">
              9M+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Total Experience</p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition group">
            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 group-hover:scale-110 transition">
              4+
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Skills Developed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

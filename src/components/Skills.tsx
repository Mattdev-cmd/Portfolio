import { Monitor, Settings, Database, Wrench, Target, Lightbulb } from 'lucide-react';

const skills = [
  { 
    category: 'Frontend', 
    icon: Monitor,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vue', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    category: 'Backend', 
    icon: Settings,
    items: ['Node.js', 'FastAPI', 'Express', 'Django', 'REST APIs'],
    color: 'from-purple-500 to-pink-500'
  },
  { 
    category: 'Databases', 
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    category: 'Tools & Others', 
    icon: Wrench,
    items: ['Git', 'Android Studio', 'AWS', 'Figma', 'Vite'],
    color: 'from-orange-500 to-red-500'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <Target className="inline w-8 h-8 mr-2" /> Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 transition duration-500 rounded-2xl`}></div>

              <div className="mb-4">
                <skillGroup.icon size={48} className="text-blue-500 dark:text-blue-400" />
              </div>

              <h3 className={`text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${skillGroup.color}`}>
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center group/item"
                  >
                    <span className={`w-2 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full mr-3 group-hover/item:scale-150 transition`}></span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition font-medium">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Proficiency
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition ${
                          i <= 4
                            ? `bg-gradient-to-r ${skillGroup.color}`
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            <Lightbulb className="inline w-6 h-6 mr-2" /> Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management', 'Attention to Detail', 'Continuous Learning', 'Creativity'].map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-200 rounded-full font-semibold border border-blue-200 dark:border-blue-800 hover:shadow-lg transition transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

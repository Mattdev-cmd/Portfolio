import { Monitor, Settings, Database, Wrench } from 'lucide-react';

const skills = [
  { 
    category: 'Frontend', 
    icon: Monitor,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vue', 'HTML/CSS'],
    color: 'text-blue-400'
  },
  { 
    category: 'Backend', 
    icon: Settings,
    items: ['Node.js', 'FastAPI', 'Express', 'Django', 'REST APIs'],
    color: 'text-purple-400'
  },
  { 
    category: 'Databases', 
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
    color: 'text-cyan-400'
  },
  { 
    category: 'Tools & Others', 
    icon: Wrench,
    items: ['Git', 'Android Studio', 'AWS', 'Figma', 'Vite'],
    color: 'text-orange-400'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <skillGroup.icon size={24} className={skillGroup.color} />
                <h3 className="text-lg font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management', 'Attention to Detail', 'Continuous Learning'].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 border border-blue-400/50 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-400/10 transition-colors"
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

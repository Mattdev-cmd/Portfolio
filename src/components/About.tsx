import { Award, Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Projects Built', value: '10+' },
    { icon: Lightbulb, label: 'Technologies', value: '15+' },
    { icon: Target, label: 'Years Learning', value: '2+' },
    { icon: Zap, label: 'Commits', value: '500+' },
  ];

  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Fresh graduate passionate about web development and building meaningful digital experiences
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="public/AI.jpg"
                alt="Matthew Angelo L. Padayao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Driven by Curiosity and Innovation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am a recent IT graduate specializing in web development. I build responsive, user-friendly applications and enjoy solving real-world problems through technology. I have hands-on experience with modern web tools and continuously improve my skills through projects.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">What I'm focused on:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Writing clean, maintainable, and scalable code
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Creating responsive and user-friendly interfaces
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Learning new technologies and best practices
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Collaborating with teams to solve real-world problems
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
                src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/678531838_122098512416584943_8895036844492862784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHFGy4ACblC31EV5HVRH5jTmlY9a5HvgzmaVj1rke-DOd69zfIA9WyNOcbqLaX2S9avE9VBa4CfS0HeLBX3ech0&_nc_ohc=NGFt2kNYKkEQ7kNvwF8r6Eq&_nc_oc=AdoAwkbrxYJ2ZcCjb7_C225vkdz1a5OwWS5qwlzFzXXcl7kQmY1MqJV7fQyeLCrfHao&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=W7xBJqHjAU82lRhkTjbd7w&_nc_ss=7b2a8&oh=00_Af1VRgwLayoZGL09JhBKAo0Nx4AdmgvzG95LKW939i7qjw&oe=69F2249F"
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

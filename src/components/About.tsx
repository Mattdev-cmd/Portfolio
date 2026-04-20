import { Award, Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, label: 'Projects Built', value: '10+' },
    { icon: Lightbulb, label: 'Technologies', value: '15+' },
    { icon: Target, label: 'Years Learning', value: '2+' },
    { icon: Zap, label: 'Commits', value: '500+' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Fresh graduate passionate about web development and building meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/518334185_735353382534663_8859249012261143864_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhg7xEZXXkgUth54SXg1PCQyIuUTNAOthDIi5RM0A62N4X-JlUPlelV6_2NUwJMVH6UKYTCgEnJVy_z8Q1Hu9g&_nc_ohc=F3YD-0lvAaAQ7kNvwFAmcRV&_nc_oc=AdqHujhv5IwESckg2mUgNIckoqApwfUjFFhSc47JMJuNEl52gTBj7ukN7KVxAFGr610&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=YI3NU6I53XIb9fauw0FP_A&_nc_ss=7a3a8&oh=00_Af0gY3QnfREWLKvjHnZcMsMbNBg1WmjTPIj8sc2Px9t-Mw&oe=69EB6C31"
                alt="Matthew Angelo L. Padayao"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Driven by Curiosity and Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a recent IT graduate specializing in web development. I build responsive, user-friendly applications and enjoy solving 
                real-world problems through technology. I have hands-on experience with modern web tools and continuously improve my skills through projects.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What I'm focused on:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Writing clean, maintainable, and scalable code
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Creating responsive and user-friendly interfaces
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Learning new technologies and best practices
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Collaborating with teams to solve real-world problems
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-gray-700 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

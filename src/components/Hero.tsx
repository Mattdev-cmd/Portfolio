import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f6f7fb] px-6 pt-28 pb-16 text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_71%_44%,rgba(92,71,255,0.12),transparent_18%),radial-gradient(circle_at_50%_50%,rgba(92,71,255,0.06),transparent_44%)] dark:bg-[radial-gradient(circle_at_71%_44%,rgba(92,71,255,0.17),transparent_18%),radial-gradient(circle_at_50%_50%,rgba(92,71,255,0.07),transparent_44%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-180px)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          <div className="max-w-[44rem] space-y-10">
            <div className="space-y-0.5">
              <p className="text-base font-medium text-slate-900 md:text-lg dark:text-white">Hello, I'm</p>

              <div className="space-y-3">
                <h1 className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.2rem] lg:whitespace-nowrap xl:text-[3.6rem]">
                  Matthew Angelo Padayao
                </h1>

                <h2 className="text-2xl font-bold leading-[0.95] tracking-tight sm:text-xl md:text-[1.875rem] lg:text-[2rem] xl:text-[2rem]">
                  <span className="text-blue-600">Junior</span>{' '}
                  <span className="text-slate-900 dark:text-white">Developer</span>
                </h2>
              </div>
            </div>

            <p className="max-w-lg text-base leading-8 text-slate-600 sm:text-lg dark:text-gray-400">
              I design and develop scalable, user-focused web applications using modern
              technologies such as React, Tailwind, and Node.js. I am passionate about
              building clean, efficient, and maintainable code while creating seamless and
              responsive user experiences.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-7 py-4 text-base font-medium text-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900/[0.03] dark:border-gray-700 dark:text-white dark:hover:bg-white/[0.03]"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[34rem] justify-center lg:min-h-[42rem] lg:justify-end">
            <div className="relative flex w-full max-w-[40rem] items-end justify-center lg:justify-end">
              <div className="relative flex w-[18rem] items-end justify-center -translate-y-8 sm:w-[21rem] sm:-translate-y-10 md:w-[24rem] md:-translate-y-12 lg:w-[28rem] lg:translate-x-4 lg:-translate-y-8 xl:w-[31rem] xl:-translate-y-10">
                <div
                  className="pointer-events-none absolute left-[55%] top-[55%] -z-10 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 42%, rgba(102,84,255,0.94) 0%, rgba(79,61,204,0.82) 38%, rgba(21,16,50,0.58) 60%, rgba(0,0,0,0) 79%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0) 100%)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0) 100%)',
                    filter: 'blur(12px)',
                  }}
                />

                <img
                  src="./profile.png"
                  alt="Matthew Angelo"
                  className="relative z-10 h-auto w-full object-contain object-center"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 66%, rgba(0,0,0,0.92) 79%, rgba(0,0,0,0.45) 92%, rgba(0,0,0,0) 100%)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 66%, rgba(0,0,0,0.92) 79%, rgba(0,0,0,0.45) 92%, rgba(0,0,0,0) 100%)',
                    filter:
                      'drop-shadow(0 6px 16px rgba(0,0,0,0.35)) drop-shadow(0 22px 34px rgba(0,0,0,0.55))',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/518290085_735353462534655_8031989623691443761_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iWR6oEXy6-4Q7kNvwFiIXzz&_nc_oc=AdqsL2wK9gn_4ki0nI_n4z7Banx1KBJtCLuiIjnNoxkR3W9UdBIz1DAfFLkPaSlsLV8&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=KsTCtKihnS9aapu8LgwRSg&_nc_ss=7a32e&oh=00_Afy79IolBF3n84X-xxXaz2Db4hCcCgWiM-LtYOppwuHSsQ&oe=69CD3DCB';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-center">
        <span className="text-sm text-slate-500 dark:text-gray-500">Scroll to explore</span>
        <ChevronDown size={20} className="animate-bounce text-slate-500 dark:text-gray-500" />
      </div>
    </section>
  );
}

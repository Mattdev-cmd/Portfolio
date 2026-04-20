import { ArrowRight, Star, Rocket, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const [parallaxOffset, setParallaxOffset] = useState(0);
  
  const fullName = 'Matthew Angelo L. Padayao';

  // Typing animation
  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [displayedName]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Skills', value: '8+' },
    { label: 'Experience', value: 'Fresh' }
  ];
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #4e72bf 0%, #7b2d3f 50%, #b3002b 100%)', transform: `translateY(${parallaxOffset}px)`}}></div>
      <div className="absolute inset-0" style={{background: 'linear-gradient(45deg, rgba(78, 114, 191, 0.1) 0%, rgba(179, 0, 43, 0.1) 100%)'}}></div>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{backgroundColor: '#4e72bf'}}></div>
        <div className="absolute top-40 right-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" style={{backgroundColor: '#b3002b'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000" style={{backgroundColor: '#6b3d5e'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-24 xl:gap-32 items-center">
          {/* Left side - Text */}
          <div className="text-white space-y-6 sm:space-y-8 animate-slide-in-left">
            {/* Badge - Staggered animation */}
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-sm font-semibold animate-badge-glow" style={{animationDelay: '0s'}}>
              <Rocket size={16} className="inline mr-2" /> Fresh Graduate
            </div>

            {/* Heading with typing animation */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-slide-in-left whitespace-nowrap" style={{animationDelay: '0.1s'}}>
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 inline-block min-h-[1em]">{displayedName}<span className="animate-cursor">|</span></span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-100 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                Junior Web Developer
              </p>
            </div>

            {/* Description - Staggered */}
            <p className="text-sm sm:text-base lg:text-lg text-blue-50 leading-relaxed max-w-xl animate-slide-in-left" style={{animationDelay: '0.3s'}}>
              I design and develop scalable, user-focused web applications using modern technologies such as React, Tailwind, and Node.js. I am passionate about building clean, efficient, and maintainable code while creating seamless and responsive user experiences. My goal is to transform real-world problems into practical and high-performing digital solutions.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Staggered */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-in-left" style={{animationDelay: '0.5s'}}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl active:shadow-md"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 px-6 sm:px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl active:shadow-md"
              >
                Get in Touch <Mail size={20} />
              </button>
              <a 
                href="/RESUME.P.pdf" 
                download="Matthew_Angelo_Resume.pdf"
                className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 active:bg-white/40 px-6 sm:px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links - Staggered */}
            <div className="flex gap-3 pt-4 sm:pt-6 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <a href="https://github.com/Mattdev-cmd" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 active:bg-white/50 transition-all transform hover:scale-110 active:scale-95 hover:shadow-lg" title="GitHub">
                <GithubIcon />
              </a>
              <a href="https://www.facebook.com/shinarthemiss/" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 active:bg-white/50 transition-all transform hover:scale-110 active:scale-95 hover:shadow-lg" title="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/_ellipsisssss/" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 active:bg-white/50 transition-all transform hover:scale-110 active:scale-95 hover:shadow-lg" title="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative flex justify-center transform translate-x-12 md:translate-x-16 -translate-y-6 md:-translate-y-8" style={{animationDelay: '0.2s'}}>
            <div className="relative w-70 sm:w-80 md:w-90 lg:w-125 aspect-[3/4] animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl md:rounded-3xl transform -rotate-6 opacity-75 animate-float-rotate"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl md:rounded-3xl transform rotate-3 opacity-50 animate-float-rotate-reverse"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/30 flex items-center justify-center">
              <img
                src="./profile.jpg"
                alt="Matthew Angelo L. Padayao"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/518290085_735353462534655_8031989623691443761_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iWR6oEXy6-4Q7kNvwFiIXzz&_nc_oc=AdqsL2wK9gn_4ki0nI_n4z7Banx1KBJtCLuiIjnNoxkR3W9UdBIz1DAfFLkPaSlsLV8&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=KsTCtKihnS9aapu8LgwRSg&_nc_ss=7a32e&oh=00_Afy79IolBF3n84X-xxXaz2Db4hCcCgWiM-LtYOppwuHSsQ&oe=69CD3DCB';
                }}
              />
              {/* Floating badge with animation */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-blue-600 text-xs sm:text-sm lg:text-base flex items-center gap-2 shadow-lg animate-bounce-subtle">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                Open to Opportunities
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-indicator">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

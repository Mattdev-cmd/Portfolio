import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#terminal', label: 'Console' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/8 dark:bg-black/80">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-5">
        <a href="#home" className="shrink-0">
          <img src={logoSrc} alt="Logo" width={30} height={30} />
        </a>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-gray-300 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md dark:border-white/8 dark:bg-black/95 md:hidden">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

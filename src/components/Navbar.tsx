import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  {
    label: 'Home',
    href: '#home',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    )
  },
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    )
  },
  {
    label: 'Service',
    href: '#services',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75a3.75 3.75 0 11-5.3-5.3 3.75 3.75 0 015.3 5.3zm3.75-3.75a3.75 3.75 0 11-5.3-5.3 3.75 3.75 0 015.3 5.3z" />
      </svg>
    )
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0A2.25 2.25 0 004.5 15h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25A2.25 2.25 0 004.5 17.25h15a2.25 2.25 0 002.25-2.25m-19.5 0v.25C2.25 18.322 3.259 19.5 4.5 19.5h15a2.25 2.25 0 002.25-2.25" />
      </svg>
    )
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    )
  }
];

function NavLink({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex  items-center justify-center h-10 px-4.5 cursor-pointer overflow-hidden rounded-full transition-colors duration-200 hover:bg-white/5"
    >
      {/* Text layer - slides up on hover */}
      <motion.span
        animate={{
          y: isHovered ? -35 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="font-medium text-xs sm:text-sm uppercase tracking-wider select-none text-[var(--text-secondary)]"
      >
        {label}
      </motion.span>

      {/* Icon layer - slides up from bottom on hover */}
      <motion.span
        initial={{ y: 35, opacity: 0 }}
        animate={{
          y: isHovered ? 0 : 35,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="absolute text-[var(--text-primary)]"
      >
        {icon}
      </motion.span>
    </a>
  );
}

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2  rounded-full border transition-all duration-300 backdrop-blur-xl"
      style={{
        background: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Link Navigation List */}
      <div className="flex items-center px-2 gap-4 ">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            href={link.href}
            icon={link.icon}
          />
        ))}
      </div>

      {/* Vertical Spacer */}
      <div className="w-[1px] h-6  bg-[var(--border-color)]" />

      {/* Day / Night Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-10 h-10  rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-[var(--border-color)] text-[var(--text-secondary)]"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          // Moon Icon (Representing Dark Mode)
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // Sun Icon (Representing Light Mode)
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M7.5 7.5l-1.5-1.5M18 18l-1.5-1.5m0-12l1.5-1.5M7.5 16.5L6 18M21 12h-2.25M5.25 12H3m9-5.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

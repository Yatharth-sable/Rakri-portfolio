import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const row1 = [
  {
    name: 'React',
    color: '#00D8FF',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1.1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: 'Next.js',
    color: '#00D8FF',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="87" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="6" style={{ transition: 'fill 0.4s ease, stroke 0.4s ease' }} />
        <path d="M149.508 157.52L69.142 54H54V125.864H65.863V71.748L139.771 166.452C143.149 163.791 146.402 160.799 149.508 157.52Z" fill="var(--text-primary)" style={{ transition: 'fill 0.4s ease' }} />
        <path d="M115 54H127V126H115V54Z" fill="var(--text-primary)" style={{ transition: 'fill 0.4s ease' }} />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    color: '#FFE600',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7.875 18c-.378 0-.7-.168-.967-.504-.266-.337-.4-.77-.4-1.3v-.357h1.613v.357c0 .248.062.434.187.558.125.124.298.186.518.186.23 0 .4-.06.512-.178.113-.117.17-.288.17-.51V10h1.722v6.4c0 .546-.145.992-.435 1.34C10.057 17.828 9.3 18 7.875 18zM17.186 18c-.808 0-1.442-.234-1.9-.702-.459-.467-.688-1.127-.688-1.977h1.625c0 .356.104.623.312.8.209.178.5.267.875.267.33 0 .57-.07.72-.213.15-.143.224-.336.224-.58 0-.197-.058-.352-.175-.466-.117-.114-.343-.223-.675-.327l-.763-.238c-.822-.25-1.428-.564-1.82-.942-.39-.378-.587-.894-.587-1.549 0-.612.222-1.096.666-1.452.444-.356 1.056-.534 1.837-.534.73 0 1.312.198 1.747.594.436.396.657.946.663 1.65h-1.6c0-.285-.084-.5-.253-.646-.169-.145-.42-.218-.753-.218-.3 0-.52.063-.663.19-.142.127-.213.298-.213.514 0 .163.056.294.168.393.113.1.341.196.688.29l.712.2c.904.254 1.547.575 1.93.963.384.387.576.924.576 1.61 0 .72-.235 1.282-.706 1.688-.47.406-1.139.61-2.006.61z" fill="#000000" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    color: '#00E676',
    logo: (
      <svg className="w-16 h-20 overflow-visible" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 0C60 0 10 40 10 100C10 160 60 200 60 200C60 200 110 160 110 100C110 40 60 0 60 0Z" fill="#13AA52" />
        <path d="M60 0V200" stroke="#10AA50" strokeWidth="6" />
        <path d="M60 30 C35 60 35 130 60 160" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        <path d="M60 40 C75 70 75 120 60 150" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
      </svg>
    )
  },
  {
    name: 'HTML5',
    color: '#FF6D00',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 2L3.5 20.5L12 23L20.5 20.5L22.5 2H1.5Z" fill="#E34F26" />
        <path d="M12 3.5V21L18.5 19L20 5.5H12Z" fill="#F06529" />
        <path d="M12 9.5H8.5L8.7 12H12V14.5L8.9 14.4L8.7 12H6.2L6.6 17L12 18.5V15.5" fill="#FFFFFF" />
        <path d="M12 9.5H17.4L16.9 14.5L12 15.8V13.3L14.4 12.6L14.6 10.8H12V9.5Z" fill="#EBEBEB" />
      </svg>
    )
  },
  {
    name: 'CSS3',
    color: '#00A0E4',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 2L3.5 20.5L12 23L20.5 20.5L22.5 2H1.5Z" fill="#1572B6" />
        <path d="M12 3.5V21.1L18.5 19.3L19.9 5.5H12V3.5Z" fill="#33A9DC" />
        <path d="M12 9.5H7.7L7.5 7.5H12V5.5H5.3L5.8 11.5H12V9.5ZM12 15.6L8.9 14.8L8.7 12.8H6.7L7.1 17.5L12 18.8V15.6Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M12 9.5V11.5H16.2L15.8 15.6L12 16.6V18.7L16.9 17.4L17.7 9.5H12Z" fill="#EBEBEB" />
      </svg>
    )
  }
];

const row2 = [
  {
    name: 'Tailwind CSS',
    color: '#00D8FF',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 25 C36 25, 26 34, 18 50 C26 34, 38 34, 50 34 C64 34, 74 43, 82 59 C74 43, 62 43, 50 43 Z" fill="#38BDF8" />
        <path d="M38 43 C24 43, 14 52, 6 68 C14 52, 26 52, 38 52 C52 52, 62 61, 70 77 C62 61, 50 61, 38 61 Z" fill="#38BDF8" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    color: '#39FF14',
    logo: (
      <svg className="w-24 h-16 overflow-visible" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 4)">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm6 14.5l-6 3.4-6-3.4v-6.8l6-3.4 6 3.4v6.8z" fill="#339933"/>
          <path d="M12 6.5l4.5 2.6v5.2L12 16.9l-4.5-2.6V9.1L12 6.5z" fill="#83CD29"/>
        </g>
        <text x="25" y="20" fill="var(--text-primary)" fontSize="16" fontFamily="Kanit, sans-serif" fontWeight="900" letterSpacing="0.05em" style={{ transition: 'fill 0.4s ease' }}>node</text>
      </svg>
    )
  },
  {
    name: 'Express.js',
    color: '#E0E0E0',
    logo: (
      <svg className="w-24 h-16 overflow-visible" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="29" fill="var(--text-primary)" fontSize="26" fontFamily="Kanit, sans-serif" fontWeight="900" letterSpacing="-0.02em" style={{ transition: 'fill 0.4s ease' }}>express</text>
      </svg>
    )
  },
  {
    name: 'Redux',
    color: '#764ABC',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M375.9 157.9c-8.9-38.3-34.9-69-72.2-85.1-40.4-17.5-86.8-13.6-124 10.4-32.9 21.2-56.1 55.4-64 94.6-7.3 36.3 3.1 73 28.3 100.3l106-99.7 60.1 56.6-106 99.7c25.7 23.7 60 33.7 93.9 26.8 38.3-7.8 70-32.9 86.8-69.3 18.2-39.4 14.7-85.1-8.9-121.5l106 99.7c1.3-12.7.9-25.5-1.1-38z" fill="#764ABC" />
        <path d="M124.1 342.1c8.9 38.3 34.9 69 72.2 85.1 19.3 8.3 39.8 12.3 60.2 12.3 22 0 43.8-4.6 63.8-13.6 32.9-21.2 56.1-55.4 64-94.6 7.3-36.3-3.1-73-28.3-100.3l-106 99.7-60.1-56.6 106-99.7c-25.7-23.7-60-33.7-93.9-26.8-38.3 7.8-70 32.9-86.8 69.3-18.2 39.4-14.7 85.1 8.9 121.5l-106-99.7c-1.3 12.7-.9 25.5 1.1 38z" fill="#764ABC" opacity="0.85" />
        <circle cx="250" cy="250" r="32" fill="var(--bg-primary)" style={{ transition: 'fill 0.4s ease' }} />
      </svg>
    )
  },
  {
    name: 'AI Integration',
    color: '#D500F9',
    logo: (
      <svg className="w-20 h-20 overflow-visible" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="url(#ai-grad-official)" />
        <circle cx="50" cy="50" r="12" fill="#FFFFFF" />
        <circle cx="26" cy="26" r="8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="74" cy="26" r="8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="26" cy="74" r="8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="74" cy="74" r="8" fill="#FFFFFF" opacity="0.8" />
        <line x1="26" y1="26" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="74" y1="26" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="26" y1="74" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="74" y1="74" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="3" />
        <defs>
          <linearGradient id="ai-grad-official" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D500F9" />
            <stop offset="0.5" stopColor="#7621B0" />
            <stop offset="1" stopColor="#00D8FF" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Map the vertical scroll progress to horizontal offsets
  const x1 = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const quadrupled1 = [...row1, ...row1, ...row1, ...row1];
  const quadrupled2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden transition-colors duration-300"
      style={{ background: 'var(--bg-tertiary)' }}
    >
      {/* Row 1 - moves right */}
      <motion.div
        className="flex gap-5 mb-5"
        style={{
          x: x1,
        }}
      >
        {quadrupled1.map((tech, i) => (
          <motion.div
            key={`r1-${i}`}
            className="flex flex-col items-center justify-center rounded-3xl flex-shrink-0 border cursor-pointer transition-colors duration-300"
            whileHover={{
              scale: 1.03,
              borderColor: `${tech.color}45`,
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.15), inset 0 0 20px ${tech.color}15`,
            }}
            style={{
              width: '320px',
              height: '200px',
              background: `radial-gradient(circle at center, ${tech.color}10 0%, var(--bg-secondary) 85%)`,
              borderColor: 'var(--border-color)',
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.1), inset 0 0 15px ${tech.color}05`,
            }}
          >
            {/* Logo wrapper with floating animation and soft background glow */}
            <motion.div
              className="transform"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (i % 6) * 0.18,
              }}
              style={{
                filter: `drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 8px ${tech.color}40)`,
              }}
            >
              {tech.logo}
            </motion.div>

            {/* Sharp colored text */}
            <span
              className="mt-5 uppercase font-bold tracking-[0.2em] text-sm text-[var(--text-secondary)]"
              style={{
                opacity: 0.9,
              }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Row 2 - moves left */}
      <motion.div
        className="flex gap-5"
        style={{
          x: x2,
        }}
      >
        {quadrupled2.map((tech, i) => (
          <motion.div
            key={`r2-${i}`}
            className="flex flex-col items-center justify-center rounded-3xl flex-shrink-0 border cursor-pointer transition-colors duration-300"
            whileHover={{
              scale: 1.03,
              borderColor: `${tech.color}45`,
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.15), inset 0 0 20px ${tech.color}15`,
            }}
            style={{
              width: '320px',
              height: '200px',
              background: `radial-gradient(circle at center, ${tech.color}10 0%, var(--bg-secondary) 85%)`,
              borderColor: 'var(--border-color)',
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.1), inset 0 0 15px ${tech.color}05`,
            }}
          >
            {/* Logo wrapper with floating animation and soft glow */}
            <motion.div
              className="transform"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (i % 5) * 0.22,
              }}
              style={{
                filter: `drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 8px ${tech.color}40)`,
              }}
            >
              {tech.logo}
            </motion.div>

            {/* Sharp colored text */}
            <span
              className="mt-5 uppercase font-bold tracking-[0.2em] text-sm text-[var(--text-secondary)]"
              style={{
                opacity: 0.9,
              }}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

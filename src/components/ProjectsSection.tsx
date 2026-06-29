import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

// Import newly copied assets for Project 1 (StudyNotion)
import studynotionAbout from '../assets/studynotion_about.png';
import studynotionCode from '../assets/studynotion_code.png';
import studynotionMain from '../assets/studynotion_main.png';

// Import newly copied assets for Project 2 (TurfBook)
import turfMain from '../assets/turf_main.png';
import turfCities from '../assets/turf_cities.png';
import turfList from '../assets/turf_list.png';

// Import newly copied assets for Project 3 (Get Me a Chai)
import chaiAbout from '../assets/chai_about.png';
import chaiMain from '../assets/chai_main.png';

interface Project {
  num: string;
  name: string;
  category: string;
  col1img1: string;
  col1img2: string;
  col2img: string;
  link?: string;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'StudyNotion Platform',
    category: 'EdTech / Full Stack',
    col1img1: studynotionAbout,
    col1img2: studynotionCode,
    col2img: studynotionMain,
    link: 'https://studynotion-frontend-eight-psi.vercel.app/',
  },
  {
    num: '02',
    name: 'TurfBook App',
    category: 'Sports Venue / Booking',
    col1img1: turfCities,
    col1img2: turfList,
    col2img: turfMain,
    // link is omitted
  },
  {
    num: '03',
    name: 'Get Me a Chai',
    category: 'Crowdfunding / Creator Platform',
    col1img1: chaiAbout,
    col1img2: chaiMain,
    col2img: chaiMain,
    link: 'https://get-me-a-chaii-two.vercel.app/',
  },
];

const CARD_OFFSET = 22;
const SCALE_FACTOR = 0.04;
const total = projects.length;

function ProjectCard({
  project,
  index,
  sectionRef,
}: {
  project: Project;
  index: number;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const borderRadius = 'clamp(20px, 3vw, 40px)';
  const segmentSize = 1 / total;
  const cardStart = index * segmentSize;
  const cardsAfter = total - 1 - index;

  // Scale shrinks as cards after this one come in
  const scale = useTransform(scrollYProgress, (v) => {
    if (cardsAfter === 0) return 1;
    const stackedProgress = Math.max(0, (v - cardStart) / (segmentSize * cardsAfter));
    const stackedCount = Math.min(cardsAfter, stackedProgress * cardsAfter);
    return 1 - stackedCount * SCALE_FACTOR;
  });

  // Card shifts up as it gets buried
  const translateY = useTransform(scrollYProgress, (v) => {
    if (cardsAfter === 0) return 0;
    const stackedProgress = Math.max(0, (v - cardStart) / (segmentSize * cardsAfter));
    const stackedCount = Math.min(cardsAfter, stackedProgress * cardsAfter);
    return -stackedCount * CARD_OFFSET;
  });

  // Opacity transitions
  const opacityRange = index === 0 
    ? [0, 0.2, segmentSize] 
    : index === total - 1 
    ? [cardStart - segmentSize * 0.5, cardStart] 
    : [cardStart - segmentSize * 0.5, cardStart, cardStart + segmentSize * 0.6, cardStart + segmentSize];
    
  const opacityValues = index === 0
    ? [1, 1, 0.2]
    : index === total - 1
    ? [0, 1]
    : [0, 1, 1, 0.2];
    
  const opacity = useTransform(scrollYProgress, opacityRange, opacityValues);

  return (
    <div
      className="h-screen sticky top-0 flex items-center justify-center w-full px-4 sm:px-6 md:px-8"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="w-full border-2 p-4 sm:p-6 md:p-8 transition-colors duration-300 max-w-5xl max-h-[85vh] flex flex-col justify-between overflow-hidden"
        style={{
          borderRadius,
          borderColor: 'var(--border-color)',
          background: 'var(--bg-secondary)',
          scale,
          y: translateY,
          opacity,
          transformOrigin: 'top center',
          willChange: 'transform, opacity',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-3 sm:mb-5 flex-wrap gap-2 flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-5">
            <motion.span
              className="font-black leading-none text-[var(--text-primary)]"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.num}
            </motion.span>
            <div className="flex flex-col">
              <motion.span
                className="uppercase tracking-wider font-light text-[var(--text-muted)]"
                style={{ fontSize: 'clamp(0.6rem, 1vw, 0.85rem)' }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.category}
              </motion.span>
              <motion.span
                className="font-black uppercase leading-tight text-[var(--text-primary)]"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2.2rem)' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {project.name}
              </motion.span>
            </div>
          </div>

          {/* Interactive Live Link */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="z-20"
            >
              <motion.button
                className="rounded-full border-2 px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-white/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Live Project
              </motion.button>
            </a>
          ) : null}
        </div>

        {/* Image grid - responsive layout (hides secondary column on mobile) */}
        <div className="flex gap-3 sm:gap-4 overflow-hidden w-full flex-grow">
          {/* Secondary images (hidden on mobile, flex-column on sm+) */}
          <div className="hidden sm:flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <motion.img
              src={project.col1img1}
              alt=""
              className="w-full object-cover object-top hover:scale-[1.02] transition-transform duration-300 flex-grow"
              style={{ height: 'clamp(100px, 20vh, 200px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.img
              src={project.col1img2}
              alt=""
              className="w-full object-cover object-top hover:scale-[1.02] transition-transform duration-300 flex-grow"
              style={{ height: 'clamp(130px, 28vh, 290px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          
          {/* Main showcase image (takes 100% on mobile, 60% on sm+) */}
          <div className="w-full sm:w-[60%] flex">
            <motion.img
              src={project.col2img}
              alt=""
              className="w-full object-cover object-top hover:scale-[1.02] transition-transform duration-300 flex-grow h-full"
              style={{ height: 'clamp(200px, 50vh, 500px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 22 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="-mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-3 sm:px-6 md:px-10 pt-20 pb-32 relative z-10 transition-colors duration-300"
      style={{ background: 'var(--bg-primary)' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div
        ref={sectionRef}
        style={{ height: `${total * 100}vh`, position: 'relative' }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            sectionRef={sectionRef}
          />
        ))}
      </div>
    </section>
  );
}

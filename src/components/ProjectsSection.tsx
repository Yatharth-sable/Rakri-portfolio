import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

interface Project {
  num: string;
  name: string;
  category: string;
  col1img1: string;
  col1img2: string;
  col2img: string;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
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

  const borderRadius = 'clamp(30px, 4vw, 56px)';
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

  // Opacity transitions: fade in, stay active, fade out (except for the last card)
  // We fade out to 0.2 instead of 0 so that the top edges of stacked cards remain visible
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
      className="h-screen sticky top-0 flex items-center justify-center w-full"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="w-full border-2 p-4 sm:p-6 md:p-8"
        style={{
          borderRadius,
          borderColor: '#D7E2EA',
          background: '#0C0C0C',
          scale,
          y: translateY,
          opacity,
          transformOrigin: 'top center',
          willChange: 'transform, opacity',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.span
              className="font-black leading-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.num}
            </motion.span>
            <div className="flex flex-col">
              <motion.span
                className="uppercase tracking-wider font-light"
                style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.category}
              </motion.span>
              <motion.span
                className="font-black uppercase leading-tight"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 3vw, 3rem)' }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {project.name}
              </motion.span>
            </div>
          </div>
          <motion.button
            className="rounded-full border-2 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest hover:bg-white/10 transition-colors"
            style={{ borderColor: '#D7E2EA', color: '#D7E2EA' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Live Project
          </motion.button>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <motion.img
              src={project.col1img1}
              alt=""
              className="w-full object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.img
              src={project.col1img2}
              alt=""
              className="w-full object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 32 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <motion.img
              src={project.col2img}
              alt=""
              className="w-full object-cover"
              style={{ height: 'clamp(310px, 40vw, 590px)', borderRadius }}
              initial={{ opacity: 0, scale: 0.93, y: 28 }}
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
      className="-mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-32 relative z-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Each card needs 100vh of scroll room, last card just sits */}
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

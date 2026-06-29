import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import vector from './../assets/vector.png';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col"
      style={{ overflowX: 'clip', position: 'relative' }}
    >
      {/* Spacer to push title down, replacing the old static navbar space */}
      <div className="h-20 sm:h-24 md:h-28" />

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full relative z-10">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4"
          style={{ fontSize: 'clamp(7vw, 15.5vw, 10.5vw)' }}
        >
          Hi, We&apos; Rakri 
        </h1>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto z-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Modern Websites for Modern Businesses
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-0 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src={vector}
            alt="Jack - 3D Creator"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            style={{ display: 'block' }}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}

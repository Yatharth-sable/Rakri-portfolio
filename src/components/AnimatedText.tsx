import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p
      ref={ref}
      className={className}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', position: 'relative' }}
    >
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ opacity: 0 }}>{char === ' ' ? '\u00A0' : char}</span>
            <motion.span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                opacity,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}

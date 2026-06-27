import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate a premium API call response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 py-24 sm:py-32 overflow-hidden border-t animate-fade-in"
      style={{ background: '#0C0C0C', borderColor: 'rgba(215, 226, 234, 0.1)' }}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[180px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <FadeIn delay={0} y={30}>
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#B600A8] mb-4 block">
                  Let's Work Together
                </span>
              </FadeIn>
              <FadeIn delay={0.1} y={30}>
                <h2 className="hero-heading font-black uppercase leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                  Get In Touch
                </h2>
              </FadeIn>
              <FadeIn delay={0.2} y={30}>
                <p className="text-base sm:text-lg text-[#D7E2EA] font-light leading-relaxed mb-8 opacity-80 max-w-md">
                  Have a striking project in mind or want to explore opportunities? Drop me a message or connect through my social channels. I'll get back to you as soon as possible.
                </p>
              </FadeIn>
            </div>

            {/* Social links */}
            <div className="mt-8 lg:mt-16">
              <FadeIn delay={0.3} y={20}>
                <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA] opacity-40 font-semibold mb-5">
                  Follow Me
                </h4>
              </FadeIn>
              
              <div className="flex flex-wrap gap-4">
                {/* GitHub */}
                <FadeIn delay={0.35} y={20}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 text-[#D7E2EA] hover:text-white hover:bg-white/5"
                    style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">GitHub</span>
                  </a>
                </FadeIn>

                {/* LinkedIn */}
                <FadeIn delay={0.4} y={20}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 text-[#D7E2EA] hover:text-white hover:bg-white/5"
                    style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">LinkedIn</span>
                  </a>
                </FadeIn>

                {/* Telegram */}
                <FadeIn delay={0.45} y={20}>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 text-[#D7E2EA] hover:text-white hover:bg-white/5"
                    style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.82-.67 3.86-.94 5.3-.11.61-.34.81-.56.83-.48.04-.84-.32-1.31-.62-.73-.48-1.14-.78-1.85-1.25-.82-.54-.29-.84.18-1.33.12-.13 2.26-2.07 2.3-2.25.01-.02.01-.11-.04-.15-.05-.04-.12-.03-.18-.01-.08.02-1.29.82-3.64 2.41-.34.24-.65.35-.93.34-.31-.01-.91-.18-1.36-.32-.55-.18-.99-.28-.95-.59.02-.16.24-.33.67-.51 2.62-1.14 4.37-1.89 5.25-2.25 2.5-1.02 3.02-1.2 3.36-1.2.07 0 .24.02.35.12.09.08.12.18.13.26-.01.07-.01.19-.02.26z" />
                    </svg>
                    <span className="text-sm font-medium tracking-wide">Telegram</span>
                  </a>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={40} className="w-full">
              <div
                className="relative rounded-3xl p-6 sm:p-10 border overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(215, 226, 234, 0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#D7E2EA] opacity-60 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter Name"
                          className="px-5 py-4 rounded-xl border bg-transparent text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300 focus:outline-none focus:border-[#B600A8]"
                          style={{
                            borderColor: 'rgba(215, 226, 234, 0.12)',
                            background: 'rgba(255, 255, 255, 0.01)',
                          }}
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#D7E2EA] opacity-60 font-medium">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          placeholder="xyz@example.com"
                          className="px-5 py-4 rounded-xl border bg-transparent text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300 focus:outline-none focus:border-[#B600A8]"
                          style={{
                            borderColor: 'rgba(215, 226, 234, 0.12)',
                            background: 'rgba(255, 255, 255, 0.01)',
                          }}
                        />
                      </div>

                      {/* Message input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#D7E2EA] opacity-60 font-medium">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Hello, I'd love to chat about..."
                          className="px-5 py-4 rounded-xl border bg-transparent text-[#D7E2EA] font-light placeholder-[#D7E2EA]/30 transition-all duration-300 resize-none focus:outline-none focus:border-[#B600A8]"
                          style={{
                            borderColor: 'rgba(215, 226, 234, 0.12)',
                            background: 'rgba(255, 255, 255, 0.01)',
                          }}
                        />
                      </div>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-2 w-full py-4 rounded-xl text-white font-medium uppercase tracking-wider text-sm transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        style={{
                          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                          boxShadow: '0px 4px 10px rgba(181, 1, 167, 0.15)',
                        }}
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : 'Send Message'}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{
                          background: 'rgba(182, 0, 168, 0.1)',
                          border: '2px solid #B600A8',
                        }}
                      >
                        <svg className="w-8 h-8 text-[#B600A8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-sm sm:text-base text-[#D7E2EA] font-light leading-relaxed max-w-sm opacity-80 mb-8">
                        Thank you for reaching out! I've received your message and will respond to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-full border text-xs sm:text-sm text-[#D7E2EA] uppercase tracking-wider hover:bg-white/5 transition-colors cursor-pointer"
                        style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

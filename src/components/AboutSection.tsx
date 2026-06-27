import FadeIn from './FadeIn';

export default function AboutSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-24 overflow-hidden"
      style={{ background: '#09070A' }}
    >
      {/* Dynamic Background Glows for visual depth */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[180px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #00D8FF 0%, transparent 70%)' }} />

      {/* Floating 3D Corner Elements */}
      {/* Top-left: Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none opacity-80"
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none opacity-80"
        />
      </FadeIn>

      {/* Bottom-left: Smiley Face */}
      <FadeIn delay={0.3} x={-80} y={0} duration={0.9} className="absolute bottom-[6%] left-[2%] sm:left-[4%] md:left-[6%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[110px] sm:w-[140px] md:w-[180px] pointer-events-none select-none opacity-85"
        />
      </FadeIn>

      {/* Bottom-right: Glass Pointer Shape */}
      <FadeIn delay={0.25} x={80} y={0} duration={0.9} className="absolute bottom-[6%] right-[2%] sm:right-[4%] md:right-[6%] z-0">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[100px] sm:w-[130px] md:w-[160px] pointer-events-none select-none opacity-85"
        />
      </FadeIn>

      {/* Content wrapper */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 max-w-6xl w-full">
        
        {/* Header section */}
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0} y={30}>
            <div
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 inline-block"
              style={{
                color: '#B600A8',
                background: 'rgba(182, 0, 168, 0.08)',
                border: '1px solid rgba(182, 0, 168, 0.25)',
                boxShadow: '0 0 12px rgba(182, 0, 168, 0.1)',
              }}
            >
              About Us
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1} y={40}>
            <h2
              className="font-black uppercase tracking-tight text-center leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7.5vw, 90px)' }}
            >
              <span className="text-white">About </span>
              <span
                style={{
                  background: 'linear-gradient(180deg, #B600A8 0%, #7621B0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                &amp;
              </span>
              <span
                style={{
                  background: 'linear-gradient(180deg, #00D8FF 0%, #00B0FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {' '}
                Vision
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="font-light text-[#D7E2EA] opacity-80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              We are a team of passionate designers and developers building modern, high-performance websites and digital experiences that help businesses grow online.
            </p>
          </FadeIn>
        </div>

        {/* Two main cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full">
          
          {/* Card 1: About Us (Purple) */}
          <FadeIn delay={0.25} y={40} className="w-full">
            <div
              className="rounded-3xl p-6 sm:p-10 border flex flex-col justify-between h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(24, 1, 31, 0.5) 0%, rgba(12, 12, 12, 0.8) 100%)',
                borderColor: 'rgba(182, 0, 168, 0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(182, 0, 168, 0.05)',
              }}
            >
              <div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#B600A8] mb-4 block">
                  About Us
                </span>
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                  We build modern, high-performance websites that combine beautiful design, AI-powered features, and fast development.
                </p>
              </div>

              {/* Three features list */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t" style={{ borderColor: 'rgba(215, 226, 234, 0.08)' }}>
                {/* Fast Delivery */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(182, 0, 168, 0.25)',
                      background: 'rgba(182, 0, 168, 0.08)',
                      boxShadow: '0 0 10px rgba(182, 0, 168, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#B600A8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Fast Delivery</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">3–5 day delivery guarantee</span>
                </div>

                {/* Clean Code */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(182, 0, 168, 0.25)',
                      background: 'rgba(182, 0, 168, 0.08)',
                      boxShadow: '0 0 10px rgba(182, 0, 168, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#B600A8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Clean Code</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">Scalable, secure and optimized</span>
                </div>

                {/* Support */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(182, 0, 168, 0.25)',
                      background: 'rgba(182, 0, 168, 0.08)',
                      boxShadow: '0 0 10px rgba(182, 0, 168, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#B600A8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Reliable Support</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">30 days free support for every project</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Our Vision (Cyan) */}
          <FadeIn delay={0.3} y={40} className="w-full">
            <div
              className="rounded-3xl p-6 sm:p-10 border flex flex-col justify-between h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 28, 31, 0.4) 0%, rgba(12, 12, 12, 0.8) 100%)',
                borderColor: 'rgba(0, 216, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 216, 255, 0.05)',
              }}
            >
              <div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#00D8FF] mb-4 block">
                  Our Vision
                </span>
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-8">
                  To make world-class web design and AI technology accessible to businesses of every size.
                </p>
              </div>

              {/* Three features list */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t" style={{ borderColor: 'rgba(215, 226, 234, 0.08)' }}>
                {/* Innovate */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(0, 216, 255, 0.25)',
                      background: 'rgba(0, 216, 255, 0.08)',
                      boxShadow: '0 0 10px rgba(0, 216, 255, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644M21.964 11.678a1.012 1.012 0 010 .644M12 5.625c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                      <circle cx="12" cy="13.625" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Innovate</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">We constantly explore new technologies</span>
                </div>

                {/* Empower */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(0, 216, 255, 0.25)',
                      background: 'rgba(0, 216, 255, 0.08)',
                      boxShadow: '0 0 10px rgba(0, 216, 255, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584M18 18.72a5.97 5.97 0 00-.75-2.906" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Empower</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">We help businesses grow digitally</span>
                </div>

                {/* Impact */}
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border mb-3"
                    style={{
                      borderColor: 'rgba(0, 216, 255, 0.25)',
                      background: 'rgba(0, 216, 255, 0.08)',
                      boxShadow: '0 0 10px rgba(0, 216, 255, 0.1)',
                    }}>
                    <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white mb-1">Impact</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 font-light leading-snug">We create solutions that make a difference</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats horizontal bar */}
        <FadeIn delay={0.35} y={30} className="w-full">
          <div
            className="w-full rounded-3xl border p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4"
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              borderColor: 'rgba(215, 226, 234, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
            }}
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{
                  borderColor: 'rgba(118, 33, 176, 0.3)',
                  background: 'rgba(118, 33, 176, 0.08)',
                  boxShadow: '0 0 15px rgba(118, 33, 176, 0.1)',
                }}>
                <svg className="w-5 h-5 text-[#7621B0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-1.883-2.212c-1.385-.233-2.78-.349-4.184-.349-1.405 0-2.8.116-4.184.35a2.25 2.25 0 00-1.883 2.212m16.5 0V12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12v2.15M12 3v1.5m0 3v1.5m0 3v1.5M8.25 5.25h7.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">50+</span>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 tracking-widest uppercase font-medium">Projects Completed</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-[#D7E2EA]/15 to-transparent" />

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{
                  borderColor: 'rgba(182, 0, 168, 0.3)',
                  background: 'rgba(182, 0, 168, 0.08)',
                  boxShadow: '0 0 15px rgba(182, 0, 168, 0.1)',
                }}>
                <svg className="w-5 h-5 text-[#B600A8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.162-.487.808-.487.97 0l2.64 8.125a.75.75 0 00.712.502h8.536c.516 0 .727.662.308.973l-6.905 5.02a.75.75 0 00-.273.84l2.64 8.125c.162.487-.393 1.013-.811.713L12 18.82l-6.905 5.021c-.418.3-.973-.226-.811-.713l2.64-8.125a.75.75 0 00-.273-.84l-6.905-5.02c-.419-.311-.208-.973.308-.973h8.536a.75.75 0 00.712-.502L11.48 3.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">100%</span>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 tracking-widest uppercase font-medium">Client Satisfaction</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-[#D7E2EA]/15 to-transparent" />

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{
                  borderColor: 'rgba(0, 216, 255, 0.3)',
                  background: 'rgba(0, 216, 255, 0.08)',
                  boxShadow: '0 0 15px rgba(0, 216, 255, 0.1)',
                }}>
                <svg className="w-5 h-5 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">3–5 Days</span>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 tracking-widest uppercase font-medium">Average Delivery</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-[#D7E2EA]/15 to-transparent" />

            {/* Stat 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{
                  borderColor: 'rgba(56, 189, 248, 0.3)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.1)',
                }}>
                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H18V10.5h.75A2.25 2.25 0 0121 12.75zm-18 0V15A2.25 2.25 0 005.25 17.25H6V10.5h-.75A2.25 2.25 0 003 12.75z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">30 Days</span>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA] opacity-60 tracking-widest uppercase font-medium">Free Support</span>
              </div>
            </div>

          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.4} y={30} className="mt-4">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="px-10 py-4.5 rounded-full text-white font-medium uppercase tracking-[0.2em] text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] hover:opacity-95 flex items-center gap-3 cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #7621B0 0%, #00D8FF 100%)',
              boxShadow: '0px 8px 30px rgba(0, 216, 255, 0.25)',
            }}
          >
            Let's Build Something Amazing
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}

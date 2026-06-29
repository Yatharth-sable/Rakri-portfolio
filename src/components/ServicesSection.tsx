import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'Website Delivered in 10–15 Days',
    points: ['🚀 Fast Turnaround', '⏱️ Launch Your Business Quickly'],
  },
  {
    num: '02',
    name: 'Design',
    points: ['🎨 100% Custom Design', '✨ Premium UI/UX', '📱 Mobile-First Responsive'],
  },
  {
    num: '03',
    name: 'Technology',
    points: ['🤖 AI Features Included', '⚙️ Modern Tech Stack'],
  },
  {
    num: '04',
    name: 'Quality',
    points: ['🔒 Secure & Scalable', '⚡ Lightning-Fast Performance', '🌍 Free Domain & Deployment Setup'],
  },
  {
    num: '05',
    name: 'Business',
    points: ['📈 Built to Generate Leads', '💰 Affordable Pricing'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {svc.num}
              </span>
              <div className="flex flex-col justify-center pt-2 sm:pt-4 w-full">
                <span
                  className="font-medium uppercase mb-3"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                
                {/* Interactive Points Grid */}
                <div className="flex flex-wrap gap-2.5  mt-1.5">
                  {svc.points.map((pt, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-2 rounded-full text-sm sm:text-base font-light border transition-all duration-300 hover:bg-black/5 hover:scale-[1.02]"
                      style={{
                        borderColor: 'rgba(12, 12, 12, 0.12)',
                        color: '#0C0C0C',
                        background: 'rgba(12, 12, 12, 0.02)',
                      }}
                    >
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

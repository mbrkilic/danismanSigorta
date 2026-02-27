import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Ücretsiz Danışma',
    desc: 'Uzman danışmanımızla telefon, video veya yüz yüze görüşme ayarlayın. İhtiyaçlarınızı ve bütçenizi değerlendiriyoruz.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Kişisel Analiz & Teklif',
    desc: 'İhtiyaç analizinize göre 15+ sigorta şirketinden size en uygun teklifleri karşılaştırarak sunuyoruz.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Hızlı Poliçe & Destek',
    desc: 'Seçtiğiniz poliçeyi dakikalar içinde düzenliyoruz. Sonrasında da her adımda yanınızda olmaya devam ediyoruz.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section id="nasil-calisir" ref={ref} className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A86B]/10 text-[#00A86B] text-sm font-semibold mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Süreç
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
            3 adımda mükemmel<br />sigorta güvencesi
          </h2>
          <p className="reveal reveal-delay-2 text-slate-500 text-lg leading-relaxed">
            Danışmanlık sürecimiz sizin için kolaylaştırılmış ve tamamen şeffaftır.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[640px] h-px">
            <div className="w-full h-px bg-gradient-to-r from-[#0F4C81] via-[#00A86B] to-[#0F4C81] opacity-20"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className={`reveal reveal-delay-${index + 1} flex flex-col items-center lg:items-start text-center lg:text-left`}>
                {/* Step number + icon */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#0F4C81]/15 flex items-center justify-center text-[#0F4C81] shadow-sm mb-3 mx-auto lg:mx-0">
                    {step.icon}
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#0F4C81] text-white text-xs font-bold flex items-center justify-center font-display">
                    {index + 1}
                  </span>
                </div>

                <div className="text-sm font-bold text-[#0F4C81]/40 tracking-widest uppercase mb-2">
                  Adım {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

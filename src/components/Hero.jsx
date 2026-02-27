import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = sectionRef.current
      if (!el) return
      el.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen hero-gradient overflow-hidden flex items-center noise-bg">
      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-[#00A86B]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-36 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left - Text */}
        <div className="flex flex-col gap-8">
          <div className="reveal reveal-delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse"></span>
              Türkiye'nin Güvenilir Sigorta Danışmanı
            </div>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight">
              Geleceğinizi
              <br />
              <em className="not-italic text-[#6ee7b7]">birlikte</em>
              <br />
              güvence altına
              <br />
              alalım.
            </h1>
          </div>

          <p className="reveal reveal-delay-2 text-white/75 text-lg leading-relaxed max-w-md font-light">
            Danışman Sigorta olarak, size en uygun sigorta çözümünü uzman ekibimizle birlikte buluyoruz. Şeffaf, hızlı ve güvenilir danışmanlık hizmeti.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#iletisim"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#00A86B] text-white font-semibold text-base hover:bg-[#008756] transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Danışmanla Görüş
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </a>

            <a
              href="#sigortalar"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-white/30 text-white/90 font-medium text-base hover:bg-white/10 transition-all duration-200"
            >
              Ürünlerimizi Keşfet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Trust stats */}
          <div className="reveal reveal-delay-4 flex flex-wrap gap-8 pt-4">
            {[
              { value: '25+', label: 'Yıl Deneyim' },
              { value: '50K+', label: 'Mutlu Müşteri' },
              { value: '15+', label: 'Sigorta Şirketi' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white font-display">{stat.value}</span>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - 3D Illustration */}
        <div className="reveal reveal-delay-2 relative flex items-center justify-center">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main shield illustration */}
            <div className="float-anim">
              <svg viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                {/* Outer glow */}
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a6bb5"/>
                    <stop offset="100%" stopColor="#00A86B"/>
                  </linearGradient>
                  <linearGradient id="shieldGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03"/>
                  </linearGradient>
                </defs>

                {/* Background circle */}
                <circle cx="200" cy="220" r="170" fill="white" fillOpacity="0.07"/>
                <circle cx="200" cy="220" r="145" fill="white" fillOpacity="0.06"/>

                {/* Main shield */}
                <path d="M200 60 L320 100 L320 210 C320 290 260 355 200 380 C140 355 80 290 80 210 L80 100 Z" fill="url(#shieldGrad)" filter="url(#glow)"/>
                {/* Shield highlight */}
                <path d="M200 60 L320 100 L320 210 C320 290 260 355 200 380 C140 355 80 290 80 210 L80 100 Z" fill="url(#shieldGrad2)"/>
                {/* Shield border */}
                <path d="M200 70 L310 108 L310 210 C310 284 254 346 200 370 C146 346 90 284 90 210 L90 108 Z" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none"/>

                {/* Checkmark */}
                <circle cx="200" cy="215" r="52" fill="white" fillOpacity="0.15"/>
                <circle cx="200" cy="215" r="44" fill="white" fillOpacity="0.12"/>
                <path d="M178 215 L192 229 L222 200" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Floating elements */}
                <g opacity="0.9">
                  {/* Car icon card */}
                  <rect x="30" y="150" width="76" height="56" rx="12" fill="white" fillOpacity="0.92"/>
                  <rect x="30" y="150" width="76" height="56" rx="12" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
                  <text x="68" y="172" textAnchor="middle" fontSize="18">🚗</text>
                  <text x="68" y="193" textAnchor="middle" fontSize="9" fill="#0F4C81" fontFamily="DM Sans, sans-serif" fontWeight="600">Araç</text>

                  {/* Home icon card */}
                  <rect x="294" y="130" width="76" height="56" rx="12" fill="white" fillOpacity="0.92"/>
                  <rect x="294" y="130" width="76" height="56" rx="12" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
                  <text x="332" y="152" textAnchor="middle" fontSize="18">🏠</text>
                  <text x="332" y="173" textAnchor="middle" fontSize="9" fill="#0F4C81" fontFamily="DM Sans, sans-serif" fontWeight="600">Konut</text>

                  {/* Health icon card */}
                  <rect x="300" y="250" width="76" height="56" rx="12" fill="white" fillOpacity="0.92"/>
                  <text x="338" y="272" textAnchor="middle" fontSize="18">❤️</text>
                  <text x="338" y="293" textAnchor="middle" fontSize="9" fill="#0F4C81" fontFamily="DM Sans, sans-serif" fontWeight="600">Sağlık</text>

                  {/* Travel icon card */}
                  <rect x="25" y="250" width="76" height="56" rx="12" fill="white" fillOpacity="0.92"/>
                  <text x="63" y="272" textAnchor="middle" fontSize="18">✈️</text>
                  <text x="63" y="293" textAnchor="middle" fontSize="9" fill="#0F4C81" fontFamily="DM Sans, sans-serif" fontWeight="600">Seyahat</text>
                </g>

                {/* Stars */}
                <circle cx="155" cy="95" r="3" fill="white" fillOpacity="0.7"/>
                <circle cx="250" cy="400" r="2.5" fill="white" fillOpacity="0.5"/>
                <circle cx="340" cy="200" r="2" fill="white" fillOpacity="0.6"/>
                <circle cx="60" cy="320" r="2.5" fill="white" fillOpacity="0.5"/>
              </svg>
            </div>

            {/* Floating badge */}
            <div className="float-anim-slow absolute -bottom-4 left-8 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#00A86B]/10 flex items-center justify-center text-[#00A86B]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Aktif Poliçe</div>
                <div className="text-sm font-bold text-slate-800">Güvende Hissediyorum</div>
              </div>
            </div>

            <div className="float-anim-reverse absolute top-8 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
              <div className="flex -space-x-1">
                {['#0F4C81', '#00A86B', '#1a6bb5'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{backgroundColor: c}}></div>
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-700">50K+ Müşteri</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Keşfet</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  )
}

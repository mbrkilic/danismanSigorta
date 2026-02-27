import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: 'blue',
    title: 'Uzman Danışmanlık',
    desc: 'Ortalama 12 yıl deneyime sahip sertifikalı sigorta uzmanlarımız, size ihtiyaçlarınıza en uygun poliçeyi bulmakta rehberlik eder.',
    stat: '25+ Yıl',
    statLabel: 'Sektör Deneyimi',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: 'green',
    title: 'Hızlı İşlem Süreci',
    desc: 'Başvurunuzdan poliçenizin düzenlenmesine kadar tüm süreç 24 saat içinde tamamlanır. Zaman kaybetmeden güvence altında olun.',
    stat: '< 24 Saat',
    statLabel: 'Poliçe Düzenleme',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: 'blue',
    title: 'Şeffaf Poliçeler',
    desc: 'Tüm teminatlar, muafiyetler ve koşullar size açıkça aktarılır. Sürpriz yoktur; tam olarak ne satın aldığınızı bilirsiniz.',
    stat: '%100',
    statLabel: 'Şeffaflık Taahhüdü',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'green',
    title: 'Güvenilir Destek',
    desc: 'Hasar anında 7/24 ulaşabileceğiniz dedicated destek ekibimiz, sürecinizin sorunsuz ilerlemesi için aktif olarak takip eder.',
    stat: '7/24',
    statLabel: 'Hasar Destek Hattı',
  },
]

export default function WhyUs() {
  const ref = useScrollReveal()

  return (
    <section id="neden-biz" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F4C81]/8 text-[#0F4C81] text-sm font-semibold mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
              </svg>
              Neden Danışman Sigorta?
            </div>

            <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
              Sizi <span className="gradient-text">gerçekten</span><br />anlayan bir partner
            </h2>

            <p className="reveal reveal-delay-2 text-slate-500 text-lg leading-relaxed mb-8">
              Binlerce sigorta poliçesi arasında doğru seçimi yapmak zorlu olabilir. Biz bu yükü sizden alıyor ve bağımsız danışmanlık anlayışımızla her zaman sizin çıkarınızı ön planda tutuyoruz.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
                Bağımsız danışmanlık
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
                Komisyon bağımsızlığı
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
                SPK lisanslı uzmanlar
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
                15+ sigorta şirketi
              </div>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feat, index) => (
              <div
                key={feat.title}
                className={`reveal reveal-delay-${index + 1} p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                  feat.color === 'blue'
                    ? 'border-[#0F4C81]/12 bg-[#0F4C81]/3 hover:border-[#0F4C81]/25'
                    : 'border-[#00A86B]/15 bg-[#00A86B]/3 hover:border-[#00A86B]/30'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  feat.color === 'blue' ? 'bg-[#0F4C81]/10 text-[#0F4C81]' : 'bg-[#00A86B]/10 text-[#00A86B]'
                }`}>
                  {feat.icon}
                </div>
                <div className="mb-3">
                  <span className={`text-2xl font-bold font-display ${feat.color === 'blue' ? 'text-[#0F4C81]' : 'text-[#00A86B]'}`}>
                    {feat.stat}
                  </span>
                  <div className="text-xs text-slate-400 font-medium">{feat.statLabel}</div>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{feat.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

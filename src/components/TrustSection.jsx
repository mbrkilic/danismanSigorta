import { useScrollReveal } from '../hooks/useScrollReveal'

const partners = [
  { name: 'Axa Sigorta', abbr: 'AXA' },
  { name: 'Allianz Sigorta', abbr: 'ALZ' },
  { name: 'Mapfre Sigorta', abbr: 'MPF' },
  { name: 'Zurich Sigorta', abbr: 'ZUR' },
  { name: 'Generali Sigorta', abbr: 'GEN' },
  { name: 'Ergo Sigorta', abbr: 'ERG' },
]

const certBadges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'SPK Lisanslı',
    sub: 'Sermaye Piyasası Kurulu',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'TSEV Üyesi',
    sub: 'Türkiye Sigorta Eğitim Vakfı',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'ISO 9001:2015',
    sub: 'Kalite Yönetim Sistemi',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Dijital Güvenli',
    sub: 'SSL & KVKK Uyumlu Platform',
  },
]

export default function TrustSection() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F4C81]/8 text-[#0F4C81] text-sm font-semibold mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
            </svg>
            Güven & Sertifikalar
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
            Güçlü iş birlikleri,<br /><span className="gradient-text">kanıtlanmış güven</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-500 text-lg max-w-xl mx-auto">
            Türkiye'nin önde gelen sigorta şirketleriyle kurduğumuz güçlü ortaklıklar sayesinde size en iyi seçenekleri sunuyoruz.
          </p>
        </div>

        {/* Partner logos */}
        <div className="reveal reveal-delay-2 grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0F4C81]/8 flex items-center justify-center">
                <span className="text-[#0F4C81] font-bold text-xs tracking-wider">{p.abbr}</span>
              </div>
              <span className="text-slate-400 text-xs text-center leading-tight">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Cert badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {certBadges.map((badge, i) => (
            <div key={badge.title} className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-5 flex items-center gap-4 border border-slate-100 shadow-sm`}>
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                {badge.icon}
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{badge.title}</div>
                <div className="text-slate-400 text-xs leading-tight">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

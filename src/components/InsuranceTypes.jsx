import { useScrollReveal } from '../hooks/useScrollReveal'

const insuranceTypes = [
  {
    id: 'arac',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="14" fill="#EFF6FF"/>
        <path d="M10 26l3-8h22l3 8" stroke="#0F4C81" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="26" width="28" height="8" rx="2" fill="#0F4C81" fillOpacity="0.12" stroke="#0F4C81" strokeWidth="1.5"/>
        <circle cx="16" cy="36" r="3" fill="#0F4C81"/>
        <circle cx="32" cy="36" r="3" fill="#0F4C81"/>
        <path d="M19 36h10" stroke="#0F4C81" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 22h22" stroke="#0F4C81" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Araç Sigortası',
    desc: 'Kasko ve zorunlu trafik sigortası seçenekleriyle aracınızı her koşulda güvence altına alın.',
    tags: ['Kasko', 'Trafik', 'Genişletilmiş'],
  },
  {
    id: 'konut',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="14" fill="#F0FDF4"/>
        <path d="M24 12L12 22v16h8v-8h8v8h8V22L24 12z" fill="#00A86B" fillOpacity="0.15" stroke="#00A86B" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="20" y="30" width="8" height="8" rx="1" fill="#00A86B" fillOpacity="0.3"/>
        <path d="M21 26h2M25 26h2" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Konut Sigortası',
    desc: 'Yangın, hırsızlık, su baskını ve doğal afetlere karşı evinizi ve eşyalarınızı koruyun.',
    tags: ['Yangın', 'Hırsızlık', 'Deprem'],
  },
  {
    id: 'saglik',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="14" fill="#FFF7ED"/>
        <path d="M24 36c-8-6-12-11-12-16a8 8 0 0116 0 8 8 0 0116 0c0 5-4 10-12 16z" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M24 22v6M21 25h6" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sağlık Sigortası',
    desc: 'Poliklinik, hastane ve diş tedavisi dahil kapsamlı sağlık güvencesiyle kendinizi ve ailenizi koruyun.',
    tags: ['Poliklinik', 'Hastane', 'Diş'],
  },
  {
    id: 'seyahat',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="14" fill="#F0F9FF"/>
        <path d="M36 16L28 24l-14 4 4-14 8-8" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#0284C7" fillOpacity="0.12"/>
        <circle cx="20" cy="28" r="2" fill="#0284C7"/>
        <path d="M28 24l4 4" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seyahat Sigortası',
    desc: 'Yurt içi ve yurt dışı seyahatlerinizde sağlık, bagaj ve iptal güvenceleriyle huzurla yolculuk edin.',
    tags: ['Acil Tıp', 'Bagaj', 'Yurt Dışı'],
  },
  {
    id: 'isyeri',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="14" fill="#FDF4FF"/>
        <rect x="12" y="20" width="24" height="18" rx="2" fill="#9333EA" fillOpacity="0.12" stroke="#9333EA" strokeWidth="1.8"/>
        <path d="M18 20v-4a6 6 0 0112 0v4" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="29" r="2.5" fill="#9333EA" fillOpacity="0.5"/>
        <path d="M24 31v3" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'İşyeri Sigortası',
    desc: 'İş yerinizin demirbaşları, stokları ve üçüncü şahıs sorumlulukları için kapsamlı koruma çözümleri.',
    tags: ['Demirbaş', 'Sorumluluk', 'İş Kaybı'],
  },
]

export default function InsuranceTypes() {
  const ref = useScrollReveal()

  return (
    <section id="sigortalar" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F4C81]/8 text-[#0F4C81] text-sm font-semibold mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Sigorta Ürünlerimiz
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
            Her ihtiyacınız için{' '}
            <span className="gradient-text">doğru güvence</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-500 text-lg leading-relaxed">
            Hayatınızın her alanına özel sigorta çözümleri sunuyoruz. Uzman danışmanlarımız size en uygun seçeneği bulmanızda yardımcı olur.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((type, index) => (
            <div
              key={type.id}
              className={`reveal reveal-delay-${Math.min(index + 1, 5)} insurance-card bg-white border border-slate-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm cursor-pointer`}
            >
              <div>{type.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {type.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[#0F4C81] text-sm font-semibold group-hover:gap-2 transition-all">
                <span>Detaylı Bilgi</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="reveal reveal-delay-5 insurance-card bg-gradient-to-br from-[#0F4C81] to-[#0a5e6e] rounded-2xl p-7 flex flex-col justify-between gap-5 shadow-sm cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hangi Sigorta Size Uygun?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Danışmanlarımız ihtiyacınızı analiz ederek size özel seçenekler sunar.
              </p>
            </div>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00A86B] text-white text-sm font-semibold hover:bg-[#008756] transition-colors duration-200 w-fit"
            >
              Ücretsiz Danışın
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

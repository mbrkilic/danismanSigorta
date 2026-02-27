import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Danışmanlık hizmeti ücretli midir?',
    a: 'Hayır, danışmanlık hizmetimiz tamamen ücretsizdir. Uzman ekibimiz sizinle görüşür, ihtiyaç analizi yapar ve size en uygun seçenekleri sunar. Gelirlerimiz, poliçe düzenlediğimizde sigorta şirketlerinden aldığımız komisyonlardan oluşur; bu durum size herhangi bir ek maliyet yaratmaz.',
  },
  {
    q: 'Hangi sigorta şirketleriyle çalışıyorsunuz?',
    a: 'AXA, Allianz, Mapfre, Zurich, Generali, Ergo ve daha birçok lider sigorta şirketiyle anlaşmalıyız. Bu geniş portföy sayesinde size 15+ firmanın tekliflerini karşılaştırarak en avantajlı seçeneği sunabiliyoruz.',
  },
  {
    q: 'Mevcut poliçemi Danışman Sigorta\'ya taşıyabilir miyim?',
    a: 'Evet, mevcut poliçenizi yenileme tarihinizde veya uygun koşullarda daha erken Danışman Sigorta üzerinden devredebilirsiniz. Danışmanlarımız mevcut poliçenizi analiz eder ve daha iyi bir seçenek varsa size önerir.',
  },
  {
    q: 'Hasar ihbarını nasıl gerçekleştirebilirim?',
    a: 'Hasar ihbarınızı 7/24 hizmet veren hasar destek hattımızı arayarak, WhatsApp üzerinden veya dijital portalımız aracılığıyla yapabilirsiniz. Danışmanınız sürecin tüm aşamalarında yanınızda olur ve işlemleri sizin adınıza takip eder.',
  },
  {
    q: 'Poliçemi ne kadar sürede teslim alırım?',
    a: 'Standart poliçeler (araç, konut, seyahat) genellikle başvurunuzdan itibaren 2-4 saat içinde düzenlenir. Sağlık sigortaları sağlık beyanı değerlendirmesi gerektirdiğinden 24-48 saat sürebilir. Acil durumlarda ekspres işlem seçeneğimiz mevcuttur.',
  },
  {
    q: 'Birden fazla sigorta yaptırırsam indirim alabilir miyim?',
    a: 'Evet, birden fazla poliçe düzenlettirmeniz durumunda bazı sigorta şirketleri paket indirimler sunmaktadır. Ayrıca aile üyelerinizin poliçelerini de bizim aracılığımızla düzenlemeleri halinde toplu indirimlerden faydalanabilirsiniz.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border-b border-slate-100 last:border-0`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900 text-base group-hover:text-[#0F4C81] transition-colors">
          {faq.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-[#0F4C81] border-[#0F4C81] rotate-45 text-white'
            : 'border-slate-200 text-slate-400 group-hover:border-[#0F4C81] group-hover:text-[#0F4C81]'
        }`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div className={`faq-content ${open ? 'open' : ''}`}>
        <p className="text-slate-500 leading-relaxed pb-5 pr-8 text-sm">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal()

  return (
    <section id="sss" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A86B]/10 text-[#00A86B] text-sm font-semibold mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
              </svg>
              Sık Sorulan Sorular
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
              Aklınızdaki her soruya<br />
              <span className="gradient-text">net yanıtlar</span>
            </h2>
            <p className="reveal reveal-delay-2 text-slate-500 text-lg leading-relaxed mb-8">
              En sık sorulan sorulara yanıt verdik. Aklınızdaki soru burada yoksa danışmanlarımız her zaman hazır.
            </p>
            <div className="reveal reveal-delay-3">
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F4C81] text-white font-semibold text-sm hover:bg-[#0a3560] transition-colors duration-200 shadow-md"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Sorunuzu Sorun
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="reveal reveal-delay-1 bg-white rounded-2xl border border-slate-100 px-6 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

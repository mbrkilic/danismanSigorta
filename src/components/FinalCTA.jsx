import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section id="iletisim" ref={ref} className="py-24 lg:py-32 cta-gradient relative overflow-hidden noise-bg">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00A86B]/15 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white/90 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6ee7b7] animate-pulse"></span>
          Hemen Başlayın — Ücretsiz Danışmanlık
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
          Güvende olmak için
          <br />
          <em className="not-italic text-[#6ee7b7]">doğru</em> adımı atın.
        </h2>

        <p className="reveal reveal-delay-2 text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Uzman danışmanlarımız sizi bekliyor. Ücretsiz görüşmenizi şimdi planlayın ve size özel sigorta çözümünüzü bulalım.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+902121234567"
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#00A86B] text-white font-bold text-lg hover:bg-[#008756] transition-all duration-200 shadow-2xl hover:shadow-[#00A86B]/30 hover:-translate-y-1 overflow-hidden group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Danışmanla Görüş
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
          </a>

          <a
            href="mailto:info@danismansigorta.com"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            E-posta Gönder
          </a>
        </div>

        {/* Trust indicators */}
        <div className="reveal reveal-delay-4 flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/15">
          {[
            { icon: '🔒', text: 'SSL Güvenli' },
            { icon: '📋', text: 'KVKK Uyumlu' },
            { icon: '⭐', text: '4.9/5 Memnuniyet' },
            { icon: '🏆', text: '25+ Yıl Deneyim' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/60 text-sm">
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

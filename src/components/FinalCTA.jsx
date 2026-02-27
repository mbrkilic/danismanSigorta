import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', last_name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [result, setResult] = useState('')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData()
    data.append('access_key', 'YOUR_ACCESS_KEY_HERE')
    data.append('subject', 'Danışman Sigorta – CTA Form')
    data.append('botcheck', '')
    Object.entries(form).forEach(([k, v]) => data.append(k, v))
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setResult('Mesajınız iletildi, en kısa sürede dönüş yapacağız.')
        setForm({ name: '', last_name: '', email: '', phone: '', message: '' })
      } else throw new Error(json.message)
    } catch (err) {
      setStatus('error')
      setResult(err.message || 'Bir hata oluştu, lütfen tekrar deneyin.')
    }
  }

  const inp =
    'w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/35 text-sm outline-none transition-all duration-200 focus:border-white/55 focus:bg-white/15'

  return (
    <section id="iletisim" ref={ref} className="py-24 lg:py-32 cta-gradient relative overflow-hidden noise-bg">
      {/* Dekoratif Arka Plan Elemanları */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00A86B]/15 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white/90 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6ee7b7] animate-pulse"></span>
          Ücretsiz Danışmanlık ve Teklif Alın
        </div>

        {/* Ana Başlık */}
        <h2 className="reveal reveal-delay-1 font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
          Güvende olmak için
          <br />
          <em className="not-italic text-[#6ee7b7]">doğru</em> adımı atın.
        </h2>

        {/* Alt Metin */}
        <p className="reveal reveal-delay-2 text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Uzman danışmanlarımız sizi bekliyor. Formu doldurun, size en uygun sigorta çözümünü birlikte planlayalım.
        </p>

        {/* İletişim Formu */}
        <div className="reveal reveal-delay-3 mt-14 max-w-lg mx-auto text-left">
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-2xl">
            <h3 className="font-display text-2xl text-white mb-1">Hızlı Mesaj Gönderin</h3>
            <p className="text-white/50 text-sm mb-6">Bilgilerinizi bırakın, uzmanımız sizi hemen arasın.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">Ad *</label>
                  <input className={inp} type="text" name="name" placeholder="Ahmet" required value={form.name} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">Soyad *</label>
                  <input className={inp} type="text" name="last_name" placeholder="Yılmaz" required value={form.last_name} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">E-posta *</label>
                  <input className={inp} type="email" name="email" placeholder="ahmet@sirket.com" required value={form.email} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">Telefon</label>
                  <input className={inp} type="text" name="phone" placeholder="+90 (5xx)" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">Mesajınız *</label>
                <textarea className={`${inp} resize-none`} name="message" rows={4} placeholder="Size nasıl yardımcı olabiliriz?" required value={form.message} onChange={handleChange} />
              </div>

              {result && (
                <div className={`flex items-center gap-2 text-sm font-medium px-4 py-3 rounded-xl mb-4 ${
                  status === 'success'
                    ? 'bg-[#00A86B]/15 text-[#6ee7b7] border border-[#00A86B]/25'
                    : 'bg-red-500/15 text-red-300 border border-red-500/25'
                }`}>
                  {result}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#00A86B] hover:bg-[#008756] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                {status === 'loading' ? 'Gönderiliyor…' : 'Teklif Almak İçin Gönder'}
              </button>
            </form>

            {/* Sertifika ve Güven Rozetleri - Formun Altına Taşındı */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
              {[
                { icon: '🔒', text: 'SSL' },
                { icon: '📋', text: 'KVKK' },
                { icon: '⭐', text: '4.9/5' },
                { icon: '🏆', text: '25+ Yıl' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-white/40 text-[11px] font-bold uppercase tracking-tighter">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-white/20 text-[10px] mt-4">
              Verileriniz güvenle saklanır ve üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
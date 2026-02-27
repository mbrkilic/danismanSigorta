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
    // Web3Forms Key'inizi buraya ekleyin
    data.append('access_key', 'YOUR_ACCESS_KEY_HERE')
    data.append('subject', 'Danışman Sigorta – İletişim Formu')
    data.append('botcheck', '')
    Object.entries(form).forEach(([k, v]) => data.append(k, v))
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setResult('Mesajınız iletildi, size en kısa sürede döneceğiz.')
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
      {/* Arka Plan Dekorasyonu */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00A86B]/15 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6ee7b7] animate-pulse"></span>
            Ücretsiz Danışmanlık ve Teklif Alın
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl lg:text-6xl text-white leading-tight">
            Bizimle <em className="not-italic text-[#6ee7b7]">iletişime</em> geçin.
          </h2>
        </div>

        {/* Ana Kart Yapısı */}
        <div className="reveal reveal-delay-2 flex flex-col lg:flex-row bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {/* SOL TARAF: İletişim Bilgileri */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 bg-white/5 border-r border-white/10">
            <h3 className="text-2xl font-display text-white mb-8">İletişim Bilgilerimiz</h3>
            
            <div className="space-y-10">
              {/* Telefon */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#00A86B]/20 flex items-center justify-center text-[#6ee7b7] border border-[#00A86B]/30 group-hover:bg-[#00A86B] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Bizi Arayın</p>
                  <p className="text-white font-medium">+90 (212) 555 00 00</p>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#00A86B]/20 flex items-center justify-center text-[#6ee7b7] border border-[#00A86B]/30 group-hover:bg-[#00A86B] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">E-posta Gönder</p>
                  <p className="text-white font-medium">info@danismansigorta.com</p>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#00A86B]/20 flex items-center justify-center text-[#6ee7b7] border border-[#00A86B]/30 group-hover:bg-[#00A86B] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Merkez Ofis</p>
                  <p className="text-white font-medium leading-relaxed">Barbaros Mah. Sigorta Plaza No:12, Ataşehir / İstanbul</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
              <p className="text-white/30 text-xs italic leading-relaxed">
                "Size en uygun sigorta teklifini hazırlamak için uzman ekibimizle her an yanınızdayız."
              </p>
            </div>
          </div>

          {/* SAĞ TARAF: Form */}
          <div className="w-full lg:w-3/5 p-8 lg:p-12">
            <h3 className="text-2xl font-display text-white mb-1">Hızlı Mesaj Gönderin</h3>
            <p className="text-white/50 text-sm mb-8">Bilgilerinizi bırakın, uzmanımız sizi hemen arasın.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Ad *</label>
                  <input className={inp} type="text" name="name" placeholder="Ahmet" required value={form.name} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Soyad *</label>
                  <input className={inp} type="text" name="last_name" placeholder="Yılmaz" required value={form.last_name} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">E-posta *</label>
                  <input className={inp} type="email" name="email" placeholder="ahmet@mail.com" required value={form.email} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Telefon</label>
                  <input className={inp} type="text" name="phone" placeholder="+90 (5xx)" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Mesajınız *</label>
                <textarea className={`${inp} resize-none`} name="message" rows={4} placeholder="Size nasıl yardımcı olabiliriz?" required value={form.message} onChange={handleChange} />
              </div>

              {result && (
                <div className={`text-sm font-medium px-4 py-3 rounded-xl ${status === 'success' ? 'bg-[#00A86B]/15 text-[#6ee7b7]' : 'bg-red-500/15 text-red-300'}`}>
                  {result}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-[#00A86B] hover:bg-[#008756] disabled:opacity-50 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              >
                {status === 'loading' ? 'Gönderiliyor...' : 'Teklif Almak İçin Gönder'}
              </button>
            </form>

            {/* Sertifika Rozetleri - Form Altı */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/5">
              {['🔒 SSL Güvenli', '📋 KVKK Uyumlu', '⭐ 4.9/5 Puan', '🏆 25+ Yıl Deneyim'].map((item) => (
                <span key={item} className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{item}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
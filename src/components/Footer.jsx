export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1628] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#00A86B] flex items-center justify-center shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.9"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display text-white text-base">Danışman Sigorta</div>
                <div className="text-[#00A86B] text-xs tracking-widest uppercase font-medium">Güvenilir Danışmanlık</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Türkiye'nin danışmanlık odaklı sigorta aracısı. Bağımsız, şeffaf ve güvenilir.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', icon: 'in' },
                { label: 'Twitter', icon: 'tw' },
                { label: 'Instagram', icon: 'ig' },
                { label: 'Facebook', icon: 'fb' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-xs font-bold hover:bg-[#00A86B] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sigorta Türleri */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Sigorta Türleri</h3>
            <ul className="flex flex-col gap-3">
              {['Araç Sigortası', 'Konut Sigortası', 'Sağlık Sigortası', 'Seyahat Sigortası', 'İşyeri Sigortası'].map((item) => (
                <li key={item}>
                  <a href="#sigortalar" className="text-sm hover:text-[#00A86B] hover:translate-x-1 inline-block transition-all duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Hızlı Erişim</h3>
            <ul className="flex flex-col gap-3">
              {[
                ['Nasıl Çalışır', '#nasil-calisir'],
                ['Neden Biz', '#neden-biz'],
                ['SSS', '#sss'],
                ['Danışman Görüş', '#iletisim'],
                ['Hasar İhbarı', '#iletisim'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm hover:text-[#00A86B] hover:translate-x-1 inline-block transition-all duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">İletişim</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <svg className="shrink-0 mt-0.5 text-[#00A86B]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0113.95 2.5 2 2 0 0116 2.29h.5a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-1.24 2.15L17 9a16 16 0 006 6l.1-.46a2 2 0 012.15-1.24c.966.18 1.9.47 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <div className="text-white text-xs mb-0.5">Telefon</div>
                  <a href="tel:+903422328852" className="hover:text-[#00A86B] transition-colors">+90 (342) 232 88 52</a> <br />
                  <a href="tel:+903422328854" className="hover:text-[#00A86B] transition-colors">+90 (342) 232 88 54</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg className="shrink-0 mt-0.5 text-[#00A86B]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <div className="text-white text-xs mb-0.5">E-posta</div>
                  <a href="mailto:info@danismansigorta.com" className="hover:text-[#00A86B] transition-colors">info@danismansigorta.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <svg className="shrink-0 mt-0.5 text-[#00A86B]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div className="text-white text-xs mb-0.5">Adres</div>
                  <span>İncili Pınar Mah. 4. Cad. 40 Sayın İş Mrk. K:4  <br /> 
                    Şehitkamil / Gaziantep</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {year} Danışman Sigorta. Tüm hakları saklıdır.</div>
          <div className="flex flex-wrap gap-5 justify-center">
            {['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK Aydınlatma', 'Çerez Politikası'].map((link) => (
              <a key={link} href="#" className="hover:text-[#00A86B] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

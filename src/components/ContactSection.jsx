import React, { useState } from 'react';

const ContactSection = () => {
  // Form gönderim durumunu ve sonucunu yönetmek için state
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Gönderiliyor...");
    const formData = new FormData(e.target);

    // 🔥 Web3Forms Access Key'inizi buraya yapıştırın 🔥
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mesajınız başarıyla gönderildi! Teşekkür ederiz.");
      e.target.reset(); // Formu temizle
    } else {
      console.log("Hata:", data);
      setResult(data.message);
    }
  };

  return (
    <section id="iletisim" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Dekoratif Arka Plan Çizgisi */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Bize <span className="text-indigo-600">Ulaşın</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Sigorta ihtiyaçlarınız için uzman ekibimizden teklif alın veya sorularınızı sorun. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        {/* İletişim Kartı: İki Sütunlu Yapı */}
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-wrap border border-gray-100 dark:border-gray-700">
          
          {/* 1. SÜTUN (Sol): İletişim Bilgileri (Koyu Indigo) */}
          <div className="w-full lg:w-5/12 bg-indigo-600 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 leading-tight">İletişim Bilgileri</h3>
              <p className="text-indigo-100 mb-10 text-lg opacity-90">
                Aşağıdaki kanallardan bize doğrudan ulaşabilir veya formu doldurarak uzmanlarımızın size dönmesini isteyebilirsiniz.
              </p>

              <div className="space-y-8">
                {/* Adres Kutusu */}
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-200 mb-1">Merkez Ofis</h4>
                    <p className="text-lg text-white">Barbaros Mah. Sigorta Plaza <br />No:12, Ataşehir / İstanbul</p>
                  </div>
                </div>

                {/* Telefon Kutusu */}
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-200 mb-1">Müşteri Hattı</h4>
                    <p className="text-lg text-white">+90 (212) 555 00 00</p>
                  </div>
                </div>

                {/* E-posta Kutusu */}
                <div className="flex items-start space-x-5 group">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-200 mb-1">E-posta</h4>
                    <p className="text-lg text-white font-medium">info@danismansigorta.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alt Bilgi */}
            <div className="mt-12 pt-8 border-t border-indigo-500/30 text-center lg:text-left">
              <p className="text-sm text-indigo-200 italic">"Güveniniz, bizim sorumluluğumuzdur."</p>
            </div>
          </div>

          {/* 2. SÜTUN (Sağ): İletişim Formu */}
          <div className="w-full lg:w-7/12 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Koruması İçin Botcheck (Gizli) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* Ad / Soyad Satırı */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Adınız</label>
                  <input type="text" name="name" placeholder="Mehmet" required className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all placeholder:opacity-60" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Soyadınız</label>
                  <input type="text" name="last_name" placeholder="Yurt" required className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all placeholder:opacity-60" />
                </div>
              </div>

              {/* E-posta Satırı */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">E-posta Adresiniz</label>
                <input type="email" name="email" placeholder="ornek@mail.com" required className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all placeholder:opacity-60" />
              </div>

              {/* Sigorta Türü Seçimi */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">İhtiyacınız Olan Sigorta Türü</label>
                <select name="sigorta_turu" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white dark:text-gray-200 transition-all cursor-pointer">
                  <option>Kasko / Trafik Sigortası</option>
                  <option>Tamamlayıcı Sağlık Sigortası</option>
                  <option>Konut Sigortası / DASK</option>
                  <option>Seyahat Sağlık Sigortası</option>
                  <option>Diğer</option>
                </select>
              </div>

              {/* Mesaj Alanı */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Mesajınız</label>
                <textarea rows="4" name="message" placeholder="Size nasıl yardımcı olabiliriz? Sorularınızı veya taleplerinizi buraya yazabilirsiniz." required className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white transition-all resize-none placeholder:opacity-60"></textarea>
              </div>

              {/* Gönder Butonu */}
              <button type="submit" className="w-full py-4 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold text-lg shadow-xl shadow-indigo-200 dark:shadow-none transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center space-x-2">
                <span>Teklif Almak İçin Gönder</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
              
              {/* Durum Bildirimi */}
              {result && (
                <div className={`p-4 rounded-xl text-center font-medium transition-all ${result.includes("başarıyla") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
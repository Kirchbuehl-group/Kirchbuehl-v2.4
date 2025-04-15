import React, { useState } from "react";

const products = [
  {
    name: {
      de: 'iPad 11" Wi-Fi (A16)',
      en: 'iPad 11" Wi-Fi (A16)',
    },
    price: "399,00 EUR",
    delivery: "5–14 Werktage",
    note: {
      de: "Solides Einsteigergerät mit starkem Preis-Leistungs-Verhältnis.",
      en: "Solid entry-level device with great value.",
    }
  },
  {
    name: {
      de: 'iPad Pro 11" M2 Wi-Fi',
      en: 'iPad Pro 11" M2 Wi-Fi',
    },
    price: "749,00 EUR",
    delivery: "5–14 Werktage",
    note: {
      de: "Top-Leistung für intensive Anwendungen und Lehrer:innen.",
      en: "Top performance for intensive use and educators.",
    }
  },
  {
    name: {
      de: 'iPad Air 10,9" (M1)',
      en: 'iPad Air 10.9" (M1)',
    },
    price: "619,00 EUR",
    delivery: "5–14 Werktage",
    note: {
      de: "Modernes Design, stark für den Schulalltag.",
      en: "Modern design, perfect for everyday school use.",
    }
  }
];

const text = {
  de: {
    angebot: "Unsere iPad-Angebote",
    willkommen: "Digitale Bildung. Einfach gemacht.",
    entdecken: "Jetzt Angebote entdecken",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    kontakt: "Kontakt",
    senden: "Senden",
    name: "Ihr Name",
    nachricht: "Ihre Nachricht",
    kontaktformular: "Kontaktformular"
  },
  en: {
    angebot: "Our iPad Offers",
    willkommen: "Digital Education. Made Easy.",
    entdecken: "Discover Offers",
    impressum: "Imprint",
    datenschutz: "Privacy Policy",
    kontakt: "Contact",
    senden: "Send",
    name: "Your Name",
    nachricht: "Your Message",
    kontaktformular: "Contact Form"
  }
};

export default function KirchbuehlWebsite() {
  const [lang, setLang] = useState("de");

  return (
    <div className="font-sans">
      {/* Header mit Logo und Sprache */}
      <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
        <img src="/logo.png" alt="Kirchbühl Group Logo" className="h-10" />
        <div className="flex items-center gap-4">
          <select
            className="text-sm border p-1 rounded"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="de">DE 🇩🇪</option>
            <option value="en">EN 🇬🇧</option>
          </select>
        </div>
      </header>

      {/* Hero-Bereich */}
      <section className="bg-gray-100 text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">{text[lang].willkommen}</h1>
        <a href="#angebote" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
          {text[lang].entdecken}
        </a>
      </section>

      <hr className="border-black border-t-4 my-10" />

      {/* iPad-Angebote */}
      <section id="angebote" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{text[lang].angebot}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((ipad, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl hover:scale-[1.01] duration-300">
                <img src={`/ipad${i + 1}.jpg`} alt={ipad.name[lang]} className="w-full h-48 object-contain bg-white p-4" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{ipad.name[lang]}</h3>
                  <p className="text-sm text-gray-600 mb-4">{ipad.note[lang]}</p>
                  <details className="text-sm">
                    <summary className="cursor-pointer text-blue-600 hover:underline">Jetzt ansehen</summary>
                    <p className="mt-2"><strong>Preis:</strong> {ipad.price}</p>
                    <p><strong>Lieferzeit:</strong> {ipad.delivery}</p>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-black border-t-4 my-10" />

      {/* Kontaktformular */}
      <section className="py-20 px-6 bg-gray-100" id="kontakt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">{text[lang].kontaktformular}</h2>
          <form action="https://formspree.io/f/xzzewerd" method="POST" className="space-y-4 text-left">
            <input type="text" name="name" placeholder={text[lang].name} required className="w-full border p-3 rounded" />
            <textarea name="message" placeholder={text[lang].nachricht} required rows="5" className="w-full border p-3 rounded"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition">{text[lang].senden}</button>
          </form>
        </div>
      </section>

      <hr className="border-black border-t-4 my-10" />

      {/* Impressum */}
      <section id="impressum" className="py-12 px-6 bg-white text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-xl font-semibold mb-4">Impressum</h3>
          <p>Kirchbühl Group – Fillip Netzke</p>
          <p>Kirchbühlstraße 6, 79677 Schönau im Schwarzwald</p>
          <p>Tel: 0151 47600166</p>
          <p>E-Mail: kirchbuehlgroup@gmail.com</p>
        </div>
      </section>

      <hr className="border-black border-t-4 my-10" />

      {/* Datenschutz */}
      <section id="datenschutz" className="py-12 px-6 bg-gray-100 text-sm">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-xl font-semibold mb-4">Datenschutzerklärung</h3>
          <p>Ihre Daten werden gemäß DSGVO verarbeitet. Wir verwenden keine Cookies oder Tracking-Tools.</p>
          <p>Für Anfragen zur Datenverarbeitung kontaktieren Sie uns bitte per E-Mail.</p>
        </div>
      </section>

      <footer className="bg-gray-50 text-center py-6 text-xs text-gray-500">
        &copy; 2024 Kirchbühl Group – Fillip Netzke · Impressum · Datenschutz
      </footer>
    </div>
  );
}
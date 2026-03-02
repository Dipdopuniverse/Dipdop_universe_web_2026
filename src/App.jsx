import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
import { Hero } from "./section/hero.section";
import { Overview } from "./section/overview.section";
import { Achievements } from "./section/achievements.section";
import { Ecosystem } from "./section/ecosystem.section";
import { WhyUs } from "./section/whyUs.section";
import { Partner } from "./section/partner.section";
import { Portofolio } from "./section/portofolio.section";
import { Collaborator } from "./section/collaborator.section";
import { Testimoni } from "./section/testimoni.section";
import { Contact } from "./section/contact.section";
import { Helmet } from "react-helmet-async";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>DIPDOP - Ecosystem Partner & Creative Agency</title>
        <meta
          name="description"
          content="DIPDOP membangun ekosistem melalui integrasi agency, media, dan komunitas untuk UMKM dan solusi bisnis strategis."
        />
        <meta
          name="keywords"
          content="agency kreatif, partner ekosistem, solusi UMKM, DIPDOP"
        />
        <meta property="og:title" content="DIPDOP - Ecosystem Partner" />
        <meta
          property="og:description"
          content="More Than a Vendor. Your Ecosystem Partner."
        />
        <meta property="og:image" content="https://dipdop.net/wp-content/uploads/2024/10/cropped-dipdop_logo-1.jpg" />
        <meta property="og:url" content="https://dipdop-three.vercel.app/" />
      </Helmet>
      <div className="max-w-full">
        <Header />
        {/** kalo mau di revisi silakan asal rapi boleh pakai AI tapi jangan 100% & didokumentasi rapi */}
        <div className="w-full  relative flex flex-col pt-20 bg-white">
          <div className="fixed bottom-15 right-6 flex flex-col items-end gap-3 z-50">
            <div
              className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
                isOpen
                  ? "scale-100 opacity-100 mb-2"
                  : "scale-0 opacity-0  pointer-events-none"
              }`}
            >
              <a
                href="https://wa.me/62811305490"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-end gap-3"
              >
                <span className="bg-white/20 backdrop-blur-md border border-white/20 text-blue-500 text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                  Chat on WhatsApp
                </span>
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </a>
              <a
                href="mailto:official.dipdop@gmail.com"
                className="group flex items-center justify-end gap-3"
              >
                <span className="bg-white/20 backdrop-blur-md border border-white/20 text-blue-500 text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                  Send Email
                </span>
                <div className="w-12 h-12 bg-[#358dad] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-white/20">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 text-center rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/30 backdrop-blur-md ${
                isOpen ? "bg-red-500" : "bg-[#358dad]"
              }`}
            >
              <FaRegMessage color="white" />
            </button>
          </div>
          {/** Hero {Team} */}
          <Hero />
          {/** Overview {images, BuSopy} */}
          <Overview />
          {/** Achievements */}
          <Achievements />
          {/** Ecosystem */}
          <Ecosystem />
          <section className="bg-white py-20 px-4 md:px-10">
            <h2 className="text-4xl md:text-7xl poppins-bold text-[#0C2C55] mb-12 font-bold uppercase leading-tight">
              More Than a Vendor. <br />
              Your{" "}
              <span className="text-[#2D6A76] italic">Ecosystem Partner</span>
            </h2>

            <div className="grid grid-cols-1 font-sans lg:grid-cols-12 gap-0 border border-gray-200 rounded-[40px] overflow-hidden shadow-sm">
              <div className="lg:col-span-5 bg-[#2D6A76] p-8 md:p-12 text-white flex flex-col justify-between relative">
                <h1 className="text-xl md:text-2xl font-bold leading-relaxed">
                  DIPDOP tidak hanya menyediakan jasa, tetapi membangun
                  ekosistem melalui integrasi agency, media, dan komunitas.
                </h1>

                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl pb-2 font-bold italic">Expert</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">
                      Solutions
                    </p>
                  </div>
                  <div>
                    <p className="text-4xl pb-2 font-bold italic">Impact</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">
                      Social Value
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 font-sans bg-white/40 grid grid-cols-1 md:grid-cols-2 relative">
                <div className="p-8 border-b border-gray-100 md:border-r group hover:bg-gray-50 transition-colors cursor-default">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full mb-4 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-bold text-[#2D6A76] mb-2 uppercase">
                    Expert Solutions
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Menjalankan kampanye yang relevan dengan target akar rumput
                    secara strategis.
                  </p>
                </div>

                <div className="p-8 border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full mb-4 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-bold text-[#2D6A76] mb-2 uppercase">
                    Results-Driven
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Menjangkau UMKM dan komunitas secara autentik dengan hasil
                    yang terukur.
                  </p>
                </div>

                <div className="md:col-span-2 p-8 bg-gray-50/50 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                  <h2 className="text-xl font-bold text-[#2D6A76] uppercase shrink-0">
                    Creative Partnership
                  </h2>
                  <p className="text-gray-700 font-medium italic border-l-4 border-yellow-400 pl-4">
                    "Kolaborasi yang berkembang menjadi kemitraan jangka panjang
                    untuk menciptakan nilai bisnis dan dampak sosial."
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/** Why-us */}
          <WhyUs />
          {/** Partner */}
          <Partner />
          {/** Portofolio */}
          <Portofolio />
          {/** Collaborator */}
          <Collaborator />
          {/** Testimoni */}
          <Testimoni />
          {/** Contact */}
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

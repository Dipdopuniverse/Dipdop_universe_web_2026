import { title } from "motion/react-client";

export function WhyUs() {
  const collaborationData = {
    title: "WHY COLLABORATE WITH DIPDOP",
    reasons: [
      "PENDEKATAN EKOSISTEM, BUKAN ONE-OFF PROJECT",
      "AKSES LANGSUNG KE KOMUNITAS & UMKM",
      "FLEKSIBEL UNTUK BRAND, CSR, DAN INSTITUSI",
      "BERORIENTASI DAMPAK, BUKAN SEKADAR EXPOSURE",
    ],
    plus: [
      {
        title: "Jika Anda Brand / Perusahaan",
        description:
          "Kami membantu Anda menjangkau UMKM & komunitas secara autentik",
      },
      {
        title: "Jika Anda UMKM",
        description: "Kami menyediakan akses edukasi eksposur, dan kolaborasi",
      },
      {
        title: "Jika Anda Komunitas",
        description:
          "Kami membuka ruang pertumbuhan dan kolaborasi lintas sektor",
      },
      {
        title: "Jika Anda Pemerintah / Instansi Publik",
        description:
          "DIPDOP siap menjadi mitra pelaksana program pelatihan, pendampingan, dan pemberdayaan UMKM berbasis komunitas. Kami membantu implementasi kegiatan agar lebih partisipatif terukur dan berdampak langsung pada masyarakat",
      },
    ],
    footer: {
      tagline: "CREATING IMPACT THROUGH COLLABORATION",
      description:
        "DIPDOP TELAH TERLIBAT DALAM BERBAGAI PROGRAM EDUKASI, KOMPETISI BISNIS, WEBINAR, SERTA INISIATIF PEMBERDAYAAN UMKM DAN KOMUNITAS MUDA DI TINGKAT LOKAL HINGGA NASIONAL.",
    },
  };
  return (
    <>
      {/** Why-us */}
      <section
        id="why-us"
        className="bg-[#0C2C55] font-sans min-h-screen flex flex-col items-center pt-20"
      >
        <div className="w-full max-w-6xl px-6 mb-12">
          <h2 className="text-white text-left text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none poppins-bold opacity-90">
            {collaborationData.title}
          </h2>
        </div>

        <div className="w-full font-sans flex flex-col md:flex-row items-stretch px-6 gap-0">
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-t-[40px] md:rounded-tr-none md:rounded-l-[40px] border border-white/10">
            <div className="flex flex-col gap-8">
              {collaborationData.reasons.map((item, index) => (
                <div key={index} className="group cursor-default relative">
                  <div className="flex items-start gap-4 text-white">
                    <span className="text-[#00F0FF] text-xl font-black">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300">
                      {item}
                    </h3>
                  </div>
                  <div className="h-[1px] bg-white/20 mt-4 w-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center relative  shadow-2xl">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-[#0C2C55]"></div>
                <h4 className="text-[#0C2C55] font-black text-2xl md:text-3xl tracking-tighter uppercase italic">
                  {collaborationData.footer.tagline}
                </h4>
              </div>

              <p className="text-[#0C2C55]/80 text-base md:text-lg font-medium leading-relaxed mb-8">
                {collaborationData.footer.description}
              </p>

              <button className="group flex items-center gap-4 bg-[#0C2C55] text-white px-6 py-4 rounded-full font-bold hover:bg-[#00F0FF] hover:text-[#0C2C55] transition-all duration-300 shadow-lg">
                Mulai Kolaborasi
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-b-[40px] md:rounded-bl-none md:rounded-r-[40px] border border-white/10">
            <div className="flex flex-col gap-8">
              {collaborationData.plus.map((item, index) => (
                <div key={index} className="group cursor-default relative">
                  <div className="flex items-start gap-4 text-white">
                    <span className="text-[#00F0FF] text-xl font-black">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xl md:text-lg tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-300 ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-white/20 mt-4 w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-20"></div>
      </section>
    </>
  );
}

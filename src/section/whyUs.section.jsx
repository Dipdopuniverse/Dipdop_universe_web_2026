import SpotlightCard from "@/components/SpotlightCard";
import brand from "/brand.png";
import commuity from "/community-i.png";
import government from "/government-i.png";
import umkm from "/umkm-i.png";

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
        title: " Jika Anda Brand / Perusahaan",
        logo: brand,
        description:
          "Kami membantu Anda menjangkau UMKM & komunitas secara autentik",
      },
      {
        title: "Jika Anda UMKM",
        logo: umkm,
        description: "Kami menyediakan akses edukasi eksposur, dan kolaborasi",
      },
      {
        title: "Jika Anda Komunitas",
        logo: commuity,
        description:
          "Kami membuka ruang pertumbuhan dan kolaborasi lintas sektor",
      },
      {
        title: "Jika Anda Pemerintah / Instansi Publik",
        logo: government,
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

        <div className="w-[90%] md:w-[80%] font-sans flex flex-col md:flex-row items-stretch px-2 md:px-6 gap-0">
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

          <div className="flex-1 bg-white p-8 md:p-16 flex flex-col rounded-b-[40px] md:rounded-bl-none md:rounded-r-[40px] justify-center relative  shadow-2xl">
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
        </div>
        <div className="w-[90%] md:w-[80%] px-2 md:px-6 gap-4 flex-1  mt-5  ">
          <div className="md:flex hidden  flex-col gap-8">
            {collaborationData.plus.map((item, index) => (
              <div
                key={index}
                className="group border-2 p-8 md:p-12 backdrop-blur-sm rounded-[40px] relative overflow-hidden cursor-default backdrop-blur-sm border-white
                           bg-gradient-to-l from-transparent via-white to-white
                           bg-[length:200%_50%] 
                           bg-[position:-100%_0] 
                           transition-all duration-700 ease-in-out 
                           hover:bg-[position:-0%_0]
                           min-h-[180px] flex items-center"
              >
                <div className="relative w-full z-10">
                  <h3
                    className="text-xl underline underline-offset-2 md:text-2xl flex justify-between items-center font-bold tracking-tight leading-tight text-white
                             group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 text-end group-hover:hidden"
                  >
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-[80px] aspect-square p-2"
                    />
                    {item.title}
                  </h3>
                  <p
                    className="text-lg md:text-base font-medium text-black
                              absolute left-full top-0 w-full
                              opacity-0 group-hover:opacity-100 group-hover:relative group-hover:left-0
                              transition-all duration-700 ease-in-out leading-relaxed text-start"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-col flex md:hidden gap-8">
            {collaborationData.plus.map((item, index) => (
              <SpotlightCard
                key={index}
                className="w-full rounded-2xl border transition-all gap-4 shadow-2xl  hover:shadow-white group hover:border-white border-gray-600 flex flex-col p-4 items-center"
                spotlightColor="rgba(255, 255, 255, 0.3)"
              >
                <div className="w-full items-center flex gap-4">
                  <div className="w-fit h-auto p-1 rounded-full bg-white">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-[40px] aspect-square p-2"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="w-full h-[1px] shadow-2xl group-hover:bg-white bg-gray-600 "></div>
                <p className="w-full text-sm font-semibold text-white roboto-a">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="h-20"></div>
      </section>
    </>
  );
}

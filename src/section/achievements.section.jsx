import cakap from "/cakap.png";
import tembapbelajar from "/tempatbelajar.webp";
import bankuob from "/UOB-Bank.png";
import bankbjb from "/bank_bjb.png";
import bankindonesia from "/Bank _indonesia.png";
import grab from "/Grab.png";
import Kemenin from "/kemenin.png";
import start4 from "/startup4.png";
import ShinyText from "@/components/ShinyText";

export function Achievements() {
  const flyerPortofolio = [
    {
      id: 25,
      title: "Bincang Jumat Bisnis - Bank BJB",
      color: "#005596",
      category: "Design Portfolio",
      about:
        "Desain flyer edukasi bisnis kolaborasi dengan Bank BJB. Menampilkan tata letak yang bersih dengan fokus pada pembicara dan detail acara untuk menarik audiens profesional.",
      link: null,
      year: "2023",
      img: "/Bank BJB.png",
    },
    {
      id: 26,
      title: "UMKM Era Digital - Bank Indonesia",
      color: "#003366",
      category: "Design Portfolio",
      about:
        "Flyer webinar resmi untuk Bank Indonesia mengenai pengembangan UMKM. Menggunakan elemen grafis modern dan palet warna korporat yang membangun kepercayaan.",
      link: null,
      year: "2023",
      img: "/Bank Indonesia.png",
    },
    {
      id: 27,
      title: "Flyer Website Impian",
      color: "#1e3a8a",
      category: "Design Portfolio",
      about:
        "Poster promosi layanan pembuatan website dengan pesan utama mengubah pengunjung menjadi pelanggan setia. Desain fokus pada konversi dan nilai jual produk.",
      link: null,
      year: "2024",
      img: "/flyer  Website Impian untuk UMKM.png",
    },
    {
      id: 28,
      title: "Desain Kreatif Memikat - Flyer September",
      color: "#2563eb",
      category: "Design Portfolio",
      about:
        "Flyer promosi bulanan untuk jasa desain kreatif. Menggunakan tipografi bold dan layout yang dinamis untuk menunjukkan kapabilitas artistik tim desain.",
      link: null,
      year: "2024",
      img: "/FLYER SEPTEMBER.png",
    },
    {
      id: 29,
      title: "Webinar Series - Digital Branding",
      color: "#0f172a",
      category: "Design Portfolio",
      about:
        "Desain poster untuk seri webinar digital branding. Menyeimbangkan informasi teks yang padat dengan elemen visual yang tetap estetik dan mudah dibaca.",
      link: null,
      year: "2024",
      img: "/Flyer Webinar Series 2025.jpg",
    },
    {
      id: 30,
      title: "Powerful Brand Campaign - Glints",
      color: "#eab308",
      category: "Design Portfolio",
      about:
        "Desain kolaborasi untuk kampanye digital bersama Glints. Menggunakan warna kuning yang energik untuk menarik perhatian pencari kerja dan profesional muda.",
      link: null,
      year: "2023",
      img: "/Glints.png",
    },
    {
      id: 31,
      title: "Pelatihan Digital UMKM Indonesia",
      color: "#f97316",
      category: "Workshop",
      about:
        "Poster kegiatan workshop luring untuk UMKM di Jember. Layout dirancang informatif dengan peta lokasi dan jadwal yang jelas untuk mempermudah peserta.",
      link: null,
      year: "2023",
      img: "/Kecamatan Sumbersari.jpeg",
    },
    {
      id: 33,
      title: "Digital Marketing - SMK N 4 Jember",
      color: "#3b82f6",
      category: "Workshop",
      about:
        "Dokumentasi dan publikasi pelatihan Digital Marketing untuk siswa SMK. Menampilkan aktivitas nyata di lapangan untuk membangun kredibilitas program.",
      link: null,
      year: "2024",
      img: "/SMK N 4 Jember.jpeg",
    },
    {
      id: 34,
      title: "Portofolio In Competitive Market",
      color: "#111827",
      category: "Workshop",
      about:
        "Flyer edukasi mengenai cara membangun portofolio yang stand-out di pasar kompetitif. Desain elegan dengan kontras tinggi untuk kesan eksklusif.",
      link: null,
      year: "2024",
      img: "/Tempat Belajar.PNG",
    },
    {
      id: 35,
      title: "KOL Marketing - Webinar 4",
      color: "#075985",
      category: "Design Portfolio",
      about:
        "Poster strategi marketing melalui influencer (KOL). Menonjolkan profil pembicara sebagai figur otoritas dalam topik yang dibahas.",
      link: null,
      year: "2024",
      img: "/webinar 4.png",
    },
    {
      id: 36,
      title: "Konten Yang Menjual - Webinar 5",
      color: "#1e40af",
      category: "Design Portfolio",
      about:
        "Flyer webinar tentang pembuatan konten viral dan menjual. Menggunakan elemen grafis yang mencerminkan tren media sosial terkini.",
      link: null,
      year: "2024",
      img: "/webinar 5.png",
    },
  ];
  return (
    <>
      {/** Achievements */}
      <section id="achievements" className="py-24 bg-white">
        <div className=" group w-full flex flex-col items-center justify-center gap-8 mx-auto px-8">
          <div className="flex w-full flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-[#0C2C55] poppins-bold text-4xl md:text-7xl font-bold uppercase leading-none mb-4">
                Pencapaian <br />
                <span className="text-[#2D6A76] italic">DIPDOP</span>
              </h2>
              <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-full"></div>
            </div>
            <p className="text-slate-600 roboto-a font-medium max-w-sm text-right hidden md:block">
              Dedikasi kami dalam membangun ekosistem digital dan pemberdayaan
              telah diakui oleh berbagai institusi nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-[#6BA2B0] p-1 rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-white rounded-[36px] p-8 flex flex-col items-center text-center h-full">
                <div className="w-[60%] flex items-center justify-center mb-6">
                  <img
                    src={start4}
                    alt="Startup4Industry"
                    className="max-h-full object-contain  transition-all"
                  />
                </div>
                <div className="w-full bg-[#6BA2B0] py-6 px-4 rounded-3xl text-white relative">
                  <p className="uppercase tracking-[0.2em] text-xl ">
                    Finalis Startup
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-[#6BA2B0] p-1 rounded-[40px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-white rounded-[36px] p-8 flex flex-col items-center text-center h-full">
                <div className="w-[60%] flex items-center justify-center mb-6">
                  <img
                    src={Kemenin}
                    alt="Kemenperin"
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="w-full bg-[#6BA2B0] py-6 px-4 rounded-3xl text-white relative">
                  <p className="uppercase tracking-[0.2em] text-xl ">
                    Penerima Dana Hibah Implementasi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full flex flex-col justify-center items-center gap-7 relative p-1 rounded-[40px]  transition-all duration-500"></div>
          <div className="marquee-wrapper group overflow-hidden w-full bg-[#0C2C55] rounded-3xl py-12 relative">
            <div className="w-full  justify-center items-center flex pb-6 flex-col relative">
              <ShinyText
                text={
                  "Telah menggelar 10+ seminar nasional dan berpartisipasi dalam program Prakerja"
                }
                speed={3}
                className="font-extrabold uppercase text-center 2xl:text-4xl md:text-xl roboto-a "
                delay={0}
                color="#ffffff"
                shineColor="#6BA2B0"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
              <div className="h-[1px] hover:bg-white bg-white/20 mt-4 w-full"></div>
            </div>
            {/* Efek Fade Out Kanan-Kiri yang Tipis (Hanya di Pinggir) */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0C2C55] from-0% via-transparent via-10% to-transparent to-90% after:absolute after:inset-0 after:bg-gradient-to-l after:from-[#0C2C55] after:from-0% after:to-transparent after:to-10%"></div>
            <div className="animate-custom-marquee flex">
              {/* Deretan Pertama */}
              <div className="flex items-center">
                {flyerPortofolio.map((fly) => (
                  <img
                    key={`first-${fly.id}`}
                    src={fly.img}
                    alt={fly.title}
                    className="h-40 md:h-auto md:max-h-[380px] mx-8 md:mx-12 object-contain hover:scale-110 transition-transform duration-300 shadow-xl shadow-[#6BA2B0] hover:shadow-white rounded-2xl"
                  />
                ))}
              </div>

              {/* Deretan Kedua (Duplikasi) */}
              <div className="flex items-center">
                {flyerPortofolio.map((fly) => (
                  <img
                    key={`second-${fly.id}`}
                    src={fly.img}
                    alt={fly.title}
                    className="h-40 md:h-auto md:max-h-[380px] mx-8 md:mx-12 object-contain hover:scale-110 transition-transform duration-300 shadow-xl rounded-2xl"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl bg-white border-2 border-[#6BA2B0] rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden group">
            <div className="absolute -top-10 -right-5 md:-right-10 md:-bottom-10 text-[10rem] md:text-[12rem] font-black text-slate-100 italic select-none group-hover:text-[#0C2C55] transition-colors">
              200+
            </div>

            <div className="relative flex items-center gap-6">
              <div className="flex -space-x-4">
                {[
                  cakap,
                  tembapbelajar,
                  grab,
                  bankbjb,
                  bankindonesia,
                  bankuob,
                ].map((i) => (
                  <div
                    key={i}
                    className="md:w-15 md:h-15 w-10 h-10 rounded-full border-4 flex items-center justify-center border-white shadow bg-white shadow-[#6BA2B0]"
                  >
                    <img
                      src={i}
                      className="w-full rounded-full h-auto "
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="h-12 w-[2px] bg-[#6BA2B0] hidden md:block"></div>
              <div className="text-center md:text-left">
                <span className="text-5xl md:text-7xl font-black text-[#6BA2B0] tracking-tighter">
                  200+
                </span>
                <p className="text-[#6BA2B0] font-bold uppercase tracking-widest text-sm">
                  Happy Clients & Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

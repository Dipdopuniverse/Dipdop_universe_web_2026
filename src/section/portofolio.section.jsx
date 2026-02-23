import SpotlightCard from "@/components/SpotlightCard";
import AnimatedContent from "@/components/AnimatedContent";
import alung from "/alung.png";
import berandabrand from "/berandabrand.png";
import iswara from "/iswara.png";
import kinayar from "/kinayar.png";
import kontruksiku from "/kontruksiku.png";
import laundry from "/laundry.png";
import lsp from "/lsp.png";
import mahkotadollar from "/mahkotadollar.png";
import rajasamas from "/rajasamas.png";
import seven from "/seven.png";
import tjakrawala from "/tjakrawala.png";
import yp2n from "/yp2n.png";

export function Portofolio() {
  const testimoni = [
    {
      id: 1,
      title: "Kontruksimu",
      color: "#FAB95B",
      category: "Landing page",
      about:
        "Jasa konstruksi yang menyediakan jasa pembangunan, renovasi, desain dan produk konstruksi lainnya. Dengan komitmen pada kualitas dan kepuasan pelanggan, kami terus mengembangkan inovasi dan beradaptasi dengan kebutuhan pasar demi memberikan solusi terbaik pada setiap proyek.",
      link: "https://www.kontruksimu.com",
      year: "2024",
      img: kontruksiku,
    },
    {
      id: 2,
      title: "LSP Agribisnis Ambissi",
      color: "#9BC264",
      category: "Landing page",
      about:
        "LSP Agribisnis Ambissi adalah lembaga sertifikasi profesi yang terafiliasi di bawah Badan Nasional Sertifikasi Profesi (BNSP). Berdiri sejak 2015 dan mulai beroperasi mulai 2016, LSP Agribisnis Ambissi telah mensertifikasi lebih dari 5000 asesi dan memberikan lebih dari 4000 Sertifikat Kompetensi.",
      link: "https://lspagribisnis.co.id/",
      year: "2019",
      img: lsp,
    },
    {
      id: 3,
      title: "Tjakrawala Batik & Crafts",
      color: "#FFD41D",
      category: "Landing page",
      about: `Tjakrawala Batik & Crafts adalah toko online yang menawarkan 
            batik premium dari Madura. Mereka menyajikan koleksi batik tulis dengan desain yang menggabungkan keindahan budaya
             Indonesia dan inovasi kontemporer. Produk mereka mencakup kemeja batik, tas, sepatu, dan pakaian fashion lainnya.
              Toko ini berfokus pada kualitas tinggi dan menyediakan berbagai promosi seperti diskon dan pengiriman gratis dengan syarat tertentu.`,
      link: "https://tjakrawalabatik.com/",
      year: "2024",
      img: tjakrawala,
    },
    {
      id: 4,
      title: "Castle Laundry",
      color: "#FFD41D",
      category: "Landing page",
      about: `Castle Laundry adalah layanan laundry profesional di
    Bogor yang menawarkan berbagai jasa, termasuk
    laundry kiloan, laundry satuan, cuci karpet, cuci sofa,
    cuci sepatu, dan general cleaning. Dengan harga
    terjangkau mulai dari Rp5.000/kg untuk laundry
    kiloan, layanan ini memberikan solusi praktis untuk
    kebutuhan laundry dan kebersihan rumah. Mereka
    memiliki beberapa cabang di Bogor, seperti di IPB,
    Pakuan, Sindang Barang, dan Cilebut.`,
      link: "https://castlelaundry.com/",
      year: "2020",
      img: laundry,
    },
    {
      id: 5,
      title: "YP2N",
      color: "#75B06F",
      category: "Landing page",
      about: `Yayasan Pengembangan dan Pemberdayaan
    Nusantara (YP2N) adalah organisasi yang fokus
    pada komunikasi pembangunan dan pemberdayaan
    masyarakat. Didirikan pada tahun 2018 oleh alumni
    Komunikasi Pembangunan, YP2N terlibat dalam
    berbagai kegiatan pengembangan, seperti seminar,
    riset kolaboratif, serta program pemberdayaan
    pertanian dan pangan. Mereka juga memfasilitasi
    publikasi akademis melalui jurnal-jurnal seperti JP2N,
    Humanus, dan Agrinus.`,
      link: "https://yp2n.org/",
      year: "2018",
      img: yp2n,
    },
    {
      id: 6,
      title: "Mahkota Dollar",
      color: "#C3110C",
      category: "Social media management",
      about: `Mahkota Dollar adalah merek tepung singkong
    premium yang dibuat dari singkong pilihan dan
    dikeringkan di bawah sinar matahari alami. Melalui
    Instagram, kami mempresentasikan nilai kualitas
    dan keunggulan produk menggunakan visual
    menarik. Strategi konten mencakup showcase
    produk, proses produksi alami, serta manfaat
    produk bagi konsumen. Menggabungkan elemen
    edukasi dan promosi, akun ini berhasil membangun
    engagement dengan target pasar yang luas,
    meningkatkan kesadaran merek dan loyalitas
    pelanggan.`,
      link: "@mahkota_dollar",
      year: "2024",
      img: mahkotadollar,
    },
    {
      id: 7,
      title: "Alung Tortila",
      color: "#FF6500",
      category: "Social media management",
      about: `Alung Tortilla menyajikan produk tortilla segar yang
    lezat dan berkualitas tinggi. Instagram Alung Tortilla
    berfokus pada visual menarik dari produk, resep
    kreatif, serta berbagai tips menikmati tortilla.
    Dengan konten yang dinamis dan interaktif, akun ini
    mengedukasi dan menginspirasi konsumen untuk
    memanfaatkan tortilla dalam berbagai hidangan.
    Melalui strategi konten yang terstruktur, Instagram
    Alung Tortilla berhasil meningkatkan loyalitas
    pelanggan dan interaksi organik.`,
      link: "@alungtortilla",
      year: "2024",
      img: alung,
    },
    {
      id: 8,
      title: "Kinayar Craft",
      color: "#F6CE71",
      category: "Social media management",
      about: `Kinarya Craft menampilkan kerajinan tangan
    lokal yang terbuat dari bahan-bahan alami dan
    ramah lingkungan. Melalui Instagram, kami
    mempromosikan produk seperti tas, dompet,
    dan aksesori buatan tangan dengan visual
    estetis yang menonjolkan keunikan desain dan
    keahlian pengrajin. Konten kami mencakup
    produk unggulan, proses pembuatan, serta
    kisah inspiratif dari pengrajin, membangun
    hubungan yang kuat dengan audiens yang
    menghargai karya lokal dan sustainable.`,
      link: "@kinayarcraft",
      year: "2024",
      img: kinayar,
    },
    {
      id: 9,
      title: "Beranda Brand",
      color: "#FFD41D",
      category: "Social media management",
      about: `Kami mengelola Instagram Beranda Brand
    dengan fokus pada desain grafis dan branding
    kreatif. Konsep visual kami menonjolkan estetika
    yang modern dan profesional, dengan tujuan
    untuk membangun identitas merek yang kuat
    dan berkesan.
    Proyek Desain: Menampilkan karya desain
    terbaru yang mencerminkan kreativitas dan
    keahlian kami.
    Behind-the-Scenes: Memberikan wawasan
    tentang proses kreatif dan pengembangan
    proyek.
    Testimoni Klien: Menyajikan ulasan dan feedback
    dari klien yang puas dengan layanan kami.
    Tips Branding: Berbagi tips dan trik tentang
    branding dan desain untuk membantu audiens
    memahami lebih dalam tentang dunia grafis.`,
      link: null,
      year: "2024",
      img: berandabrand,
    },
    {
      id: 10,
      title: "Seven Dream Syariah Hotel",
      color: "",
      category: "Social media management",
      about: `Kami mengelola Instagram Seven Dreams Syari-
    ah Hotel dengan fokus pada menciptakan
    
    pengalaman visual yang mengundang dan
    informatif. Konsep visual kami dirancang untuk
    menonjolkan kenyamanan, keindahan, dan nilai
    syariah yang ditawarkan oleh hotel. Content
    pillar kami mencakup:
    Fasilitas Hotel: Menampilkan kamar, ruang
    publik, dan fasilitas eksklusif dengan gambar
    berkualitas tinggi.
    Promo & Penawaran: Memberikan informasi
    tentang paket spesial, diskon, dan promosi
    terbaru.
    Ulasan & Testimoni: Menghadirkan feedback
    positif dari tamu untuk membangun kepercayaan
    dan kredibilitas.
    Gaya Hidup & Aktivitas: Menyoroti kegiatan
    dan acara yang berlangsung di sekitar hotel
    serta tips untuk tamu.
    
    2024
    Year`,
      link: null,
      year: "2024",
      img: seven,
    },
    {
      id: 11,
      title: "Iswara Food",
      color: "#628141",
      category: "Social media management",
      about: `Kami mengelola Instagram Iswara Food dengan fokus
    pada menampilkan keunggulan bumbu sehat bebas
    gluten yang ditawarkan. Akun ini dirancang untuk
    memperkenalkan dan mempromosikan produk bumbu
    inti kami yang inovatif, serta untuk menarik audiens
    yang peduli dengan kesehatan dan kualitas makanan.
    Content pillar kami mencakup:
    Bumbu Inti Pengempuk Daging: Menampilkan cara
    penggunaan bumbu ini untuk meningkatkan kualitas
    daging dengan hasil yang empuk dan lezat.
    Bumbu Inti Olahan Crispy: Memperlihatkan berbagai
    olahan crispy yang dapat dihasilkan dengan bumbu
    kami, lengkap dengan resep dan tips.
    Bumbu Inti Olahan Manis: Menginspirasi dengan
    kreasi olahan manis menggunakan bumbu inti
    kami, dari kue hingga dessert.
    Testimoni Pelanggan: Menyajikan ulasan dari
    pelanggan yang telah merasakan manfaat dan
    kelezatan produk kami.
    Promo & Penawaran: Menginformasikan tentang
    penawaran spesial, diskon, dan berita terbaru dari
    Iswara Food.`,
      link: null,
      year: "2024",
      img: iswara,
    },
    {
      id: 12,
      title: "Rajasamas Batik",
      color: "#E6501B",
      category: "Social media management",
      about: `Kami mengelola Instagram Rajasamas Batik dengan
    fokus pada memperkenalkan dan merayakan keindahan
    Batik Maos asli dari Cilacap. Akun ini dirancang untuk
    menampilkan berbagai jenis batik dan produk terkait
    yang memadukan motif klasik dan kontemporer dengan
    sentuhan modern. Content pillar kami mencakup
    Batik Tulis, Batik Cap, & Batik Printing: Menampilkan koleksi batik
    yang beragam, dari batik tulis yang autentik hingga batik cap dan
    printing yang inovatif, dengan foto yang menonjolkan keindahan dan
    detail setiap desain.
    Motif Klasik & Kontemporer: Menghadirkan berbagai motif batik, mulai
    dari yang tradisional hingga yang modern, yang menggambarkan
    kekayaan budaya dan kreativitas lokal.
    Interior Anyaman Bambu: Menampilkan produk-produk interior
    berbahan bambu yang dipadukan dengan batik, memberikan
    inspirasi untuk dekorasi rumah yang unik dan stylish.
    Testimoni & Cerita: Menyajikan ulasan dari pelanggan dan cerita
    di balik setiap desain batik, menambah nilai emosional dan kultural.
    Promo & Penawaran: Menginformasikan tentang diskon, koleksi
    baru, dan acara spesial untuk menarik perhatian dan meningkatkan
    penjualan.Dengan pendekatan visual yang menonjolkan detail dan
    kualitas produk serta strategi pemasaran yang kreatif, kami berhasil
    meningkatkan brand awareness dan engagement untuk Rajasamas
    Batik, menjadikannya pilihan utama bagi mereka yang mencari batik
    autentik dan produk interior yang berkualitas.`,
      link: null,
      year: "2024",
      img: rajasamas,
    },
  ];
  return (
    <>
      {/** Portofolio */}
      <section id="portofolio" className="w-full">
        <div className="flex text-[#0C2C55] poppins-bold justify-start items-start bg-white">
          <div className="bg-[#FAB95B] p-10 rounded-tr-[40px] relative">
            <p className="text-4xl md:text-8xl uppercase text-white font-extrabold leading-none">
              Portfolio
            </p>

            <div className="absolute -top-[40px] left-0 w-[40px] h-[40px] overflow-hidden">
              <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#FAB95B]"></div>
            </div>

            <div className="absolute bottom-0 hidden md:block -right-[40px] w-[40px] h-[40px] overflow-hidden">
              <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#FAB95B]"></div>
            </div>
          </div>
        </div>
        {testimoni.map((t) => (
          <div
            key={t.id}
            style={{ backgroundColor: t.color || "#333" }}
            className=" w-full min-h-screen flex flex-col md:flex-row md:justify-around md:items-center md:p-8 sticky top-0"
          >
            <AnimatedContent
              distance={100}
              direction="vertical"
              duration={1.8}
              reverse
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.5}
            >
              <div className="w-full z-10">
                <img src={t.img} alt={t.title} className="w-full h-auto" />
              </div>
            </AnimatedContent>
            <div className="md:relative absolute top-[30%] w-full mb-5 md:w-[50%] flex flex-col gap-6">
              <AnimatedContent
                distance={100}
                direction="vertical"
                duration={1.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.5}
              >
                <SpotlightCard
                  className="p-6 md:p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-h-[70vh] md:max-h-none overflow-y-auto custom-scrollbar"
                  spotlightColor="rgba(255, 255, 255, 0.3)"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/20 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest backdrop-blur-sm">
                      {t.category}
                    </span>
                    <span className="text-white/60 text-sm font-medium">
                      {t.year}
                    </span>
                  </div>

                  <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">
                    {t.title}
                  </h2>

                  <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8 italic">
                    "{t.about}"
                  </p>

                  {t.link && (
                    <a
                      href={
                        t.link.startsWith("@")
                          ? `https://instagram.com/${t.link.substring(1)}`
                          : t.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black hover:bg-black hover:text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm md:text-base"
                    >
                      {t.category === "Landing page"
                        ? "OPEN PROJECT"
                        : "VISIT INSTAGRAM"}
                      <span className="text-xl">→</span>
                    </a>
                  )}
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

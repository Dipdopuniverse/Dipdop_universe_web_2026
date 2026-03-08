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
import etikalingkungan from "/etikalingkungan.png";
import qeez from "/qeez.png";
import coffeeppt from "/coffeeppt.png";
import anakdebu from "/anakdebu.jpg";
import gorengan from "/gorengan.jpg";
import leimena from "/leimena.jpg";
import skippy from "/skippy.jpg";
import workshop from "/workshop.jpg";
import eventElora from "/eventElora.jpg";
import mencintaisederhana from "/mencintaisederhana.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export function Portofolio() {
  const [activeCategory, setActiveCategory] = useState("Writing");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const urlDipdop = import.meta.env.VITE_URL;

  useEffect(() => {
    const takeData = async () => {
      try {
        const response = await axios.get(urlDipdop);
        const formattedData = response.data.map((item) => ({
          id: item.id,
          title: item.title.rendered,
          color: getRandomColor(),
          category: "Writing",
          about:
            item.yoast_head_json?.description ||
            "Baca berita lengkapnya di sini.",
          link: item.link,
          year: new Date(item.date).getFullYear().toString(),
          img: item.yoast_head_json?.og_image?.[0]?.url,
        }));
        setData(formattedData);
      } catch (error) {
        setError("Gagal mengambil data berita.");
      }
    };
    takeData();
  }, [activeCategory]);
  const testimoni = [
    {
      id: 1,
      title: "Kontruksimu",
      color: "#FAB95B",
      category: "Landing Page",
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
      category: "Landing Page",
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
      category: "Landing Page",
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
      category: "Landing Page",
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
      category: "Landing Page",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
      category: "Social Media Management",
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
    {
      id: 13,
      title: "Institut Leimena",
      color: "#0C2C55",
      category: "Design",
      about:
        "Desain roll banner yang dirancang untuk menyajikan profil perusahaan dengan jelas dan profesional. Mencakup informasi kunci tentang visi, misi, program kegiatan, serta informasi kontak untuk memperkenalkan organisasi kepada publik dan mitra potensial dengan layout yang mudah dibaca.",
      link: null,
      year: "2024",
      img: leimena,
    },
    {
      id: 14,
      title: "Skippy Peanut Butter",
      color: "#004B91",
      category: "Design",
      about:
        "Desain roll banner yang menonjolkan produk utama Skippy dengan tampilan menarik dan menggugah selera. Menampilkan berbagai varian produk (creamy & chunky), keunggulan bahan baku, serta saran penyajian untuk menarik perhatian konsumen.",
      link: null,
      year: "2024",
      img: skippy,
    },
    {
      id: 16,
      title: "Qeez! Magazine",
      color: "#FF007F",
      category: "Book Publishing",
      about:
        "Desain cover majalah dengan konsep modern dan dinamis. Menggunakan visual yang berani, tipografi kreatif, dan palet warna vibrant untuk mencerminkan energi serta vibrasi kuat agar menonjol di rak buku.",
      link: null,
      year: "2024",
      img: qeez,
    },
    {
      id: 17,
      title: "Anak Debu",
      color: "#4A4A4A",
      category: "Book Publishing",
      about:
        "Desain cover yang menonjolkan nuansa puitis dan reflektif. Menggunakan ilustrasi sentral yang evocative, tipografi elegan, dan palet warna sederhana untuk mencerminkan kedalaman narasi buku.",
      link: null,
      year: "2024",
      img: anakdebu,
    },
    {
      id: 18,
      title: "Untuk Mencintai Sederhana",
      color: "#BCC6CC",
      category: "Book Publishing",
      about:
        "Konsep desain yang bersih dan minimalis untuk menonjolkan keindahan dalam kesederhanaan. Menggunakan warna-warna tenang dan layout yang damai sesuai dengan tema buku yang penuh makna.",
      link: null,
      year: "2024",
      img: mencintaisederhana,
    },
    {
      id: 19,
      title: "Sajogyo Institute",
      color: "#1B5E20",
      category: "Workshop",
      about:
        "Wahana belajar-bertindak-bersama dalam produksi pengetahuan tentang masalah agraria, lingkungan, kemiskinan, dan pembaruan pedesaan di Indonesia.",
      link: "https://youtu.be/Lfx8TXr0_Hc",
      year: "2023",
      img: workshop,
    },
    {
      id: 20,
      title: "Kecamatan Sumbersari",
      color: "#0288D1",
      category: "Workshop",
      about:
        "Dokumentasi dan publikasi kegiatan workshop untuk berbagai kelurahan di Kecamatan Sumbersari meliputi Tegal Gede, Antirogo, Kranjingan, Kebonsari, dan Karangrejo.",
      link: "https://www.instagram.com/reel/CtyO6YFrJit/",
      year: "2023",
      img: workshop,
    },
    {
      id: 23,
      title: "Etika Lingkungan (Dr. Rina Mardiana)",
      color: "#388E3C",
      category: "Video",
      about:
        "Produksi video edukasi yang informatif dan engaging mengenai prinsip etika lingkungan. Mengintegrasikan grafik profesional, footage relevan, dan elemen interaktif seperti kuis untuk memfasilitasi pembelajaran efektif.",
      link: null,
      year: "2024",
      img: etikalingkungan,
    },
    {
      id: 24,
      title: "Coffee Plantation Investment",
      color: "#6D4C41",
      category: "Translation",
      about:
        "Presentasi profesional untuk proposisi investasi industri kopi. Mencakup desain slide dengan infografis data pasar, proyeksi keuangan, dan layanan penerjemahan untuk audiens internasional.",
      link: null,
      year: "2024",
      img: coffeeppt,
    },
    {
      id: 30,
      title: "Soft Launching & Meet Greet: Elora",
      color: "#DE1A58",
      category: "Event",
      about:
        "Akhirnya, perjalanan panjang sang penulis tumpah ruah dalam sebuah karya berjudul Elora. Kami mengundang kamu untuk menjadi bagian dari perjalanan awal buku ini dalam acara Soft Launching & Meet Greet yang eksklusif!",
      link: "https://dipdop.net/event-portfolio/",
      year: "2024",
      img: eventElora,
    },
  ];
  const displayData = [...testimoni, ...data];
  const filteredPortofolio = displayData.filter(
    (f) => f.category === activeCategory,
  );
  const categories = [
    {
      category: "Writing",
      seemore: "https://dipdop.net/",
    },
    {
      category: "Landing Page",
      seemore: "https://dipdop.net/website-portfolio/",
    },
    {
      category: "Social Media Management",
      seemore: "https://dipdop.net/socmed-activation-portfolio/",
    },
    {
      category: "Design",
      seemore: "https://dipdop.net/design-portfolio/",
    },
    {
      category: "Workshop",
      seemore: "https://dipdop.net/workshop-portfolio/",
    },
    {
      category: "Video",
      seemore: "https://dipdop.net/video-portfolio/",
    },
    {
      category: "Book Publishing",
      seemore: "https://dipdop.net/book-published-portfolio/",
    },
    {
      category: "Translation",
      seemore: "https://dipdop.net/translation-portfolio/",
    },
    {
      category: "Event",
      seemore: "https://dipdop.net/event-portfolio/",
    },
  ];
  return (
    <>
      {/** Portfolio */}
      <section id="portofolio" className="w-full pt-24 flex flex-col gap-4">
        <div className="flex group  px-6 flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-[#0C2C55] text-4xl md:text-8xl font-black tracking-tighter uppercase poppins-bold">
              Portfolio
            </h2>
            <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-full"></div>
          </div>
        </div>
        <div className="flex px-6 flex-wrap gap-2  ">
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === cat.category
                  ? "bg-[#0C2C55] text-white border-[#0C2C55] scale-105 shadow-lg"
                  : "bg-transparent text-[#0C2C55] border-[#0C2C55]/20 hover:border-[#0C2C55]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
        {filteredPortofolio.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundImage: `radial-gradient(circle at top left, rgba(255,255,255,0.5) 0%, ${t.color || "#1CAF49"} 100%)`,
              backgroundColor: t.color || "#1CAF49",
            }}
            className="w-full min-h-screen flex flex-col md:flex-row md:justify-center gap-9 md:items-center md:p-8 sticky top-0"
          >
            <AnimatedContent
              distance={100}
              direction="vertical"
              duration={1.8}
              reverse
              ease="power3.out"
              initialOpacity={0}
              className="w-auto md:max-w-[50%]"
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.5}
            >
              <div className="">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="w-auto h-auto"
                />
              </div>
            </AnimatedContent>
            <div className="md:relative absolute top-[40%] md:top-[30%] w-full mb-5 md:w-[50%] flex flex-col gap-6">
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
                      SEE MORE
                      <span className="text-xl">→</span>
                    </a>
                  )}
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>
        ))}
        {activeCategory && (
          <div className="px-6 flex justify-center  items-center w-full mt-4">
            <a
              href={
                categories.find((c) => c.category === activeCategory)?.seemore
              }
              target="_blank"
              className="px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 bg-[#0C2C55] text-white border-[#0C2C55] scale-105 shadow-lg"
            >
              See More →
            </a>
          </div>
        )}
      </section>
    </>
  );
}

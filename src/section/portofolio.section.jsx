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
import { motion } from "motion/react";

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
      category: "Landing Page/Website",
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
      category: "Landing Page/Website",
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
      category: "Landing Page/Website",
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
      category: "Landing Page/Website",
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
      category: "Landing Page/Website",
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
      id: 18,
      title: "Untuk Mencintai, Sederhana Saja — Turasih",
      color: "#BCC6CC",
      category: "Book Publishing",
      about:
        "Buku Untuk Mencintai, Sederhana Saja karya Turasih merupakan salah satu karya yang dikembangkan melalui layanan Book Publishing DIPDOP. Dalam proyek ini, DIPDOP mendampingi proses pengembangan buku mulai dari perancangan cover design yang merepresentasikan nuansa karya, pengurusan ISBN resmi, hingga formatting layout naskah agar siap diterbitkan secara profesional. Melalui proses tersebut, naskah yang awalnya berupa tulisan mentah berhasil ditransformasikan menjadi buku yang siap dipublikasikan dan dibaca oleh publik. Proyek ini menunjukkan komitmen DIPDOP dalam membantu penulis menghadirkan karya mereka dalam bentuk yang lebih rapi, layak terbit, dan memiliki identitas penerbitan yang jelas.",
      link: null,
      year: "2024",
      img: mencintaisederhana,
    },
    {
      id: 17,
      title: "Anak Debu — Risa Noviati Amalia",
      color: "#4A4A4A",
      category: "Book Publishing",
      about:
        "Anak Debu karya Risa Noviati Amalia juga menjadi bagian dari portofolio layanan Book Publishing DIPDOP. Dalam pengembangan buku ini, DIPDOP memberikan dukungan pada aspek desain cover, pengurusan ISBN, serta formatting layout naskah agar buku dapat tampil dengan standar penerbitan yang profesional. Pendampingan ini memungkinkan penulis untuk fokus pada kekuatan cerita dan pesan yang ingin disampaikan, sementara proses teknis penerbitan ditangani secara sistematis. Melalui kolaborasi ini, DIPDOP membantu mewujudkan karya sastra menjadi buku yang siap diperkenalkan kepada pembaca yang lebih luas.",
      link: null,
      year: "2024",
      img: anakdebu,
    },
    {
      id: 16,
      title: "Qeez! Magazine",
      color: "#FF007F",
      category: "Book Publishing",
      about:
        "Selain buku, DIPDOP juga pernah mengembangkan Qeez Magazine!, sebuah majalah digital yang lahir dari semangat kolaborasi antara tim editorial dan komunitas pembaca. Yang membuat Qeez Magazine! unik adalah pendekatannya yang melibatkan pembaca sebagai kontributor aktif. Para pembaca tidak hanya menikmati konten, tetapi juga berkesempatan mengirimkan karya artikel mereka untuk diterbitkan dalam majalah. Konsep ini menciptakan ruang kreatif yang kolaboratif, di mana komunitas ikut membangun isi majalah bersama tim editorial. Melalui pendekatan ini, Qeez Magazine! berhasil membangun hubungan yang lebih dekat dengan pembacanya serta menumbuhkan komunitas kreatif yang terus berkembang.",
      link: null,
      year: "2024",
      img: qeez,
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
      title: "Writing",
      color1: "#9DC08B",
      color2: "#609966",
      color3: "#40513B",
      description:
        "DIPDOP membantu brand, organisasi, dan individu menyampaikan pesan melalui content writing maupun copywriting untuk artikel website, blog, caption media sosial, hingga materi promosi.",
      full_text:
        "Kata-kata yang tepat dapat membangun kepercayaan, menjelaskan nilai sebuah brand, dan mendorong audiens untuk mengambil tindakan. Melalui layanan <b>Writing</b>, DIPDOP membantu brand, organisasi, dan individu menyampaikan pesan mereka dengan cara yang jelas, menarik, dan berdampak.<br><br>Kami menyediakan layanan <b>content writing maupun copywriting</b> untuk berbagai kebutuhan, mulai dari artikel website, konten blog, caption media sosial, hingga materi promosi yang dirancang untuk meningkatkan engagement dan konversi. Setiap tulisan disusun dengan pendekatan strategis agar tidak hanya enak dibaca, tetapi juga relevan dengan target audiens.<br><br>Dengan dukungan tim yang memahami storytelling dan komunikasi digital, <b>DIPDOP membantu brand Anda berbicara dengan cara yang lebih kuat dan meyakinkan.</b>",
      pricing: "Harga mulai dari IDR 350K.",
      seemore: "https://dipdop.net/",
    },
    {
      category: "Landing Page/Website",
      title: "Landing Page / Website",
      color1: "#CCA8E9",
      color2: "#C3BEF0",
      color3: "#CADEFC",
      description:
        "Membangun kehadiran digital yang kredibel, informatif, dan mudah diakses melalui representasi profesional dari sebuah brand atau organisasi.",
      full_text:
        "Di era digital, website bukan sekadar halaman online—melainkan <b>representasi profesional dari sebuah brand atau organisasi.</b> Melalui layanan <b>Landing Page & Website Development</b>, DIPDOP membantu Anda membangun kehadiran digital yang kredibel, informatif, dan mudah diakses oleh audiens.<br><br>Kami merancang landing page maupun website dengan pendekatan yang menggabungkan <b>struktur yang jelas, desain yang menarik, serta pesan yang efektif</b> sehingga pengunjung dapat memahami value yang Anda tawarkan dengan cepat.<br><br>Baik untuk kebutuhan personal branding, bisnis, komunitas, maupun kampanye program, <b>DIPDOP siap membantu membangun website yang fungsional sekaligus meyakinkan.</b>",
      pricing:
        "Harga layanan mulai dari 2 juta-an saja, raih 1 juta dalam masa promo.",
      seemore: "https://dipdop.net/website-portfolio/",
    },
    {
      category: "Social Media Management",
      title: "Social Media Management",
      color1: "#E84545",
      color2: "#903749",
      color3: "#53354A",
      description:
        "Mengelola akun media sosial secara terarah mulai dari perencanaan konten, penulisan caption, hingga desain visual.",
      full_text:
        "Media sosial telah menjadi salah satu kanal komunikasi paling penting bagi brand dan organisasi. Namun, mengelolanya secara konsisten dan strategis membutuhkan waktu, kreativitas, dan pemahaman terhadap audiens.<br><br>Melalui layanan <b>Social Media Management</b>, DIPDOP membantu mengelola akun media sosial Anda secara lebih terarah—mulai dari perencanaan konten, penulisan caption, desain visual, hingga pengelolaan publikasi konten secara berkala.<br><br>Dengan pendekatan yang terstruktur, kami membantu brand Anda <b>tetap aktif, relevan, dan mampu membangun interaksi yang lebih kuat dengan audiens.</b>",
      pricing: "Start from IDR 1 Mio",
      seemore: "https://dipdop.net/socmed-activation-portfolio/",
    },
    {
      category: "Design",
      title: "Design",
      color1: "#FAB12F",
      color2: "#FA812F",
      color3: "#DD0303",
      description:
        "Menciptakan berbagai materi visual seperti banner, logo, buku, majalah, flyer, hingga merchandise t-shirt.",
      full_text:
        "Visual yang kuat dapat membuat pesan lebih mudah dipahami dan meninggalkan kesan yang lebih lama bagi audiens. Melalui layanan <b>Design</b>, DIPDOP membantu menciptakan berbagai materi visual yang mendukung kebutuhan komunikasi dan branding Anda.<br><br>Kami mengerjakan beragam kebutuhan desain, mulai dari <b>banner, logo, buku, majalah, flyer, merchandise seperti t-shirt, hingga berbagai materi promosi lainnya.</b> Setiap desain dikembangkan dengan mempertimbangkan identitas brand, tujuan komunikasi, serta estetika visual yang menarik.<br><br>Dengan pendekatan kreatif dan fleksibel, <b>DIPDOP siap membantu mewujudkan ide Anda menjadi visual yang kuat dan profesional.</b>",
      pricing: "Layanan mulai dari ratusan ribu rupiah.",
      seemore: "https://dipdop.net/design-portfolio/",
    },
    {
      category: "Workshop",
      title: "Workshop",
      color1: "#0F828C",
      color2: "#065084",
      color3: "#320A6B",
      description:
        "Sesi pelatihan inspiratif dan aplikatif untuk pengembangan kapasitas, kreativitas, dan pemanfaatan teknologi digital.",
      full_text:
        "Berbagi pengetahuan dan pengalaman merupakan bagian penting dalam mendorong pertumbuhan individu maupun organisasi. Melalui layanan <b>Workshop</b>, DIPDOP sering bekerja sama dengan berbagai instansi, komunitas, maupun institusi pendidikan untuk menghadirkan sesi pelatihan yang inspiratif dan aplikatif.<br><br>Materi workshop dapat mencakup berbagai topik yang relevan dengan pengembangan kapasitas, kreativitas, dan pemanfaatan teknologi digital. Setiap sesi dirancang agar tidak hanya bersifat teoritis, tetapi juga memberikan <b>wawasan praktis yang dapat langsung diterapkan oleh peserta.</b><br><br>Dengan pengalaman berkolaborasi bersama berbagai pihak, <b>DIPDOP menghadirkan workshop yang informatif, interaktif, dan berdampak.</b>",
      pricing: "Program workshop mulai dari sekitar IDR 5 juta.",
      seemore: "https://dipdop.net/workshop-portfolio/",
    },
    {
      category: "Video",
      title: "Video",
      color1: "#FFE100",
      color2: "#FFC900",
      color3: "#EBE389",
      description:
        "Menghadirkan konten visual menarik untuk YouTube, video promosi, reels media sosial, hingga iklan digital.",
      full_text:
        "Konten video kini menjadi salah satu format komunikasi paling efektif untuk menjangkau audiens secara luas. Melalui layanan <b>Video Production</b>, DIPDOP membantu Anda menghadirkan konten visual yang menarik, informatif, dan relevan dengan kebutuhan komunikasi digital.<br><br>Kami memproduksi berbagai jenis video, mulai dari <b>konten YouTube, video promosi, reels media sosial, hingga materi iklan digital</b> yang dirancang untuk meningkatkan daya tarik pesan Anda.<br><br>Dengan perpaduan kreativitas dan storytelling visual, <b>DIPDOP membantu mengubah ide menjadi konten video yang lebih hidup dan mudah diingat oleh audiens.</b>",
      pricing: "Layanan mulai dari sekitar IDR 1 juta.",
      seemore: "https://dipdop.net/video-portfolio/",
    },
    {
      category: "Book Publishing",
      title: "Book Publishing",
      color1: "#483AA0",
      color2: "#7965C1",
      color3: "#E3D095",
      description:
        "Pendampingan menyeluruh proses penerbitan mulai dari editorial, desain cover, layout, ISBN, hingga pemasaran.",
      full_text:
        "Menerbitkan buku bukan sekadar mencetak naskah menjadi halaman. Sebuah buku membutuhkan proses kreatif, penyuntingan yang kuat, desain yang menarik, hingga strategi distribusi agar karya tersebut benar-benar sampai ke pembacanya. <br></br>Melalui layanan Book Publishing, DIPDOP menghadirkan pendampingan menyeluruh bagi para penulis yang ingin mengembangkan karya mereka secara profesional. Kami membantu setiap tahap dalam proses penerbitan, mulai dari editorial dan penyuntingan naskah, pengembangan desain cover, formatting layout buku, pengurusan ISBN, hingga dukungan pemasaran dan publikasi karya. <br></br>Pendekatan kami bersifat kolaboratif. Penulis tetap menjadi pemilik visi utama dari karyanya, sementara tim DIPDOP memastikan setiap aspek teknis dan kreatif dipersiapkan dengan baik agar buku dapat hadir dengan standar penerbitan yang layak dan memiliki daya tarik bagi pembaca. <br><br>Baik Anda seorang penulis yang baru memulai perjalanan literasi maupun kreator yang ingin membawa karya ke level berikutnya, DIPDOP siap menjadi partner dalam mewujudkan buku Anda menjadi karya yang siap dibaca, dibagikan, dan dikenang.",
      pricing: "Hubungi kami untuk penawaran.",
      seemore: "https://dipdop.net/book-published-portfolio/",
    },
    {
      category: "Translation",
      title: "Translation",
      color1: "#78C841",
      color2: "#B4E50D",
      color3: "#FF9B2F",
      description:
        "Layanan penerjemahan konten antara Bahasa Indonesia dan Bahasa Inggris dengan pendekatan profesional.",
      full_text:
        "Komunikasi lintas bahasa sering kali menjadi kunci untuk menjangkau audiens yang lebih luas. Melalui layanan <b>Translation</b>, DIPDOP membantu menerjemahkan berbagai jenis konten antara <b>Bahasa Indonesia dan Bahasa Inggris</b> dengan pendekatan yang profesional dan kontekstual.<br><br>Kami tidak hanya menerjemahkan kata demi kata, tetapi juga memastikan <b>makna, tone, dan pesan dari naskah tetap tersampaikan dengan baik</b> dalam bahasa tujuan.<br><br>Layanan ini cocok untuk berbagai kebutuhan, mulai dari artikel, dokumen, materi promosi, hingga konten digital lainnya.",
      pricing: "Layanan translation mulai dari ratusan ribu rupiah.",
      seemore: "https://dipdop.net/translation-portfolio/",
    },
    {
      category: "Event",
      title: "Event",
      color1: "#8F0177",
      color2: "#DE1A58",
      color3: "#F67D31",
      description:
        "Event Management untuk seminar, meet and greet, diskusi komunitas, hingga program kolaborasi lintas sektor.",
      full_text:
        "Sebuah acara yang dirancang dengan baik dapat menjadi sarana yang efektif untuk membangun relasi, menyampaikan pesan, dan memperkuat komunitas. Melalui layanan <b>Event Management</b>, DIPDOP membantu merancang dan menyelenggarakan berbagai kegiatan yang berfokus pada interaksi dan pengalaman peserta.<br><br>Kami berpengalaman dalam mengelola berbagai jenis acara seperti <b>seminar, meet and greet, diskusi komunitas, hingga program kolaborasi lintas sektor.</b> Setiap event dirancang dengan konsep yang jelas agar tujuan kegiatan dapat tercapai secara optimal.<br><br>Dengan perencanaan yang terstruktur dan pendekatan kolaboratif, <b>DIPDOP membantu menghadirkan event yang berjalan lancar, profesional, and berkesan.</b>",
      pricing: "Layanan event mulai dari sekitar IDR 10 juta.",
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
        <div className="w-full h-auto p-6 flex">
          {categories
            .filter((f) => f.category === activeCategory)
            .map((f) => {
              return (
                <div
                  className="relative w-full gap-2 md:gap-4 flex flex-col overflow-hidden p-6 md:p-8 rounded-3xl shadow-2xl"
                  style={{ backgroundColor: f.color1 }}
                  key={f.category}
                >
                  <svg
                    id="visual"
                    viewBox="0 0 900 600"
                    preserveAspectRatio="none"
                    className="absolute w-full h-full right-0 inset-0 z-0 "
                  >
                    <motion.path
                      key={`${f.category}-path1`}
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{
                        once: false,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 1.8,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      d="M695 600L391 600L391 533L610 533L610 467L609 467L609 400L361 400L361 333L514 333L514 267L428 267L428 200L399 200L399 133L545 133L545 67L587 67L587 0L900 0L900 67L900 67L900 133L900 133L900 200L900 200L900 267L900 267L900 333L900 333L900 400L900 400L900 467L900 467L900 533L900 533L900 600L900 600Z"
                      fill={f.color2}
                      fillOpacity="transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);"
                    />
                    <motion.path
                      key={`${f.category}-path2`}
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 1.8,
                        delay: 1,
                        ease: "easeOut",
                      }}
                      d="M794 600L737 600L737 533L768 533L768 467L803 467L803 400L781 400L781 333L676 333L676 267L578 267L578 200L750 200L750 133L722 133L722 67L803 67L803 0L900 0L900 67L900 67L900 133L900 133L900 200L900 200L900 267L900 267L900 333L900 333L900 400L900 400L900 467L900 467L900 533L900 533L900 600L900 600Z"
                      fill={f.color3}
                      fillOpacity="transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);"
                    />
                  </svg>
                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    duration={1.8}
                    reverse
                    ease="power3.out"
                    initialOpacity={0}
                    className="w-full"
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.5}
                  >
                    <h1 className="font-extrabold text-xl md:text-8xl relative z-10 text-white text-shadow-teal-400 uppercase">
                      {f.title}
                    </h1>
                  </AnimatedContent>
                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    duration={1.8}
                    reverse
                    ease="power3.out"
                    initialOpacity={0}
                    className="w-full"
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={1}
                  >
                    <div
                      className="z-50 relative text-sm md:text-xl w-full md:w-[40%] p-2 md:p-4 text-white"
                      dangerouslySetInnerHTML={{ __html: f.full_text }}
                    />
                  </AnimatedContent>
                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    duration={1.8}
                    reverse
                    ease="power3.out"
                    initialOpacity={0}
                    className="w-full"
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={1.2}
                  >
                    <div className="relative z-10 p-4 bg-transparent border-white rounded-[30px] hover:bg-white hover:text-gray-800 transition-all duration-300 font-semibold cursor-pointer  border-2 w-fit text-base md:text-xl italic text-white">
                      {f.pricing}
                    </div>
                  </AnimatedContent>
                </div>
              );
            })}
        </div>
        {filteredPortofolio.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundImage: `radial-gradient(circle at top left, rgba(255,255,255,0.5) 0%, ${t.color || "#1CAF49"} 100%)`,
              backgroundColor: t.color || "#1CAF49",
            }}
            className="w-full min-h-screen h-auto flex flex-col md:flex-row md:justify-center gap-9 md:items-center md:p-8 sticky top-0"
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
            <div className="md:relative absolute top-[30%] md:top-[30%] w-full mb-5 md:w-[50%] flex flex-col gap-6">
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

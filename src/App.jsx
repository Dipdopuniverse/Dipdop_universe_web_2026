import "./App.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { FaRegMessage } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Papa from "papaparse";
//img
import Team from "/grub.jpg";
import Kemenin from "/kemenin.png";
import start4 from "/startup4.png";
import dip1 from "/dip1.jpg";
import dip2 from "/dip2.jpg";
import dip3 from "/dip3.jpg";
import dip4 from "/dip4.jpg";
import dip5 from "/dip5.jpg";
import vid1 from "/vid1.MOV";
//logo partner & collaborator
import dealls from "/dealls.png";
import kerja from "/kerja.png";
import glint from "/glint.jpg";
import pijar from "/pijar.png";
import cc from "/cc.png";
import cakap from "/cakap.png";
import dana from "/dana.png";
import gocorp from "/gocorp.png";
import grab from "/Grab.png";
import kampus from "/kampus.png";
import taldo from "/taldo.png";
import voucherku from "/voucherku.png";
import xendit from "/xendit.png";
import tembapbelajar from "/tempatbelajar.webp";
import bankuob from "/UOB-Bank.png";
import bankbjb from "/bank_bjb.png";
import bankindonesia from "/Bank _indonesia.png";
import original from "/original.webp";

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

//logo colaborator
import agriculture from "/agriculture.png";
import banking from "/banking.png";
import consulting from "/consulting.png";
import educational from "/educational.png";
import fnb from "/fnb.png";
import goverment from "/goverment.png";
import hotel from "/hotel.png";
import mining from "/mining.png";
import organizations from "/organizations.png";
import retail from "/retail.png";
import se from "/se.png";
import smes from "/smes.png";
import smess2 from "/smess2.png";
import startup from "/startup.png";
import training from "/training.png";

//component react bits
import CurvedLoop from "./components/CurvedLoop";
import CircularText from "./components/CircularText";
import LogoLoop from "./components/LogoLoop";
import ShinyText from "./components/ShinyText";
import AnimatedContent from "./components/AnimatedContent";
import SpotlightCard from "./components/SpotlightCard";
import FlowingMenu from "./components/FlowingMenu";
import ReviewCard from "./components/ReviewCard";
import BounceCards from "./components/BounceCards";
import Stack from "./components/Stack";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [reviews, setReviews] = useState([]);
  const images = [dip1, dip2, dip3, dip4, dip5];

  const transformStyles = [
    "rotate(10deg) translate(-150px)",
    "rotate(5deg) translate(-75px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(75px)",
    "rotate(2deg) translate(150px)",
  ];

  useEffect(() => {
    fetch("/review.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (res) => setReviews(res.data),
        });
      });
  }, []);
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
  const partnerLogos = [
    { src: dealls, title: "Dealls", href: "" },
    { src: kerja, title: "IKERJA", href: "" },
    { src: glint, title: "Glints", href: "" },
    { src: pijar, title: "Pijar Mahir", href: "" },
    { src: cc, title: "Cerdas Cermat", href: "" },
    { src: cakap, title: "Cakap", href: "" },
    { src: dana, title: "DANA", href: "" },
    { src: gocorp, title: "GoCorp", href: "" },
    { src: kampus, title: "Kampus Merdeka", href: "" },
    { src: taldo, title: "Taldo", href: "" },
    { src: voucherku, title: "Voucherku", href: "" },
    { src: xendit, title: "Xendit", href: "" },
    { src: tembapbelajar, title: "Teman Belajar", href: "" },
    { src: original, title: "Original", href: "" },
  ];
  const colaboratorLogo = [
    { src: agriculture, title: "Dealls", category: "Agriculture" },
    { src: banking, title: "IKERJA", category: "Banking" },
    { src: consulting, title: "Glints", category: "Consulting" },
    { src: educational, title: "Pijar Mahir", category: "educational" },
    { src: fnb, title: "Cerdas Cermat", category: "FNB" },
    { src: goverment, title: "Cakap", category: "Goverment" },
    { src: hotel, title: "DANA", category: "Hotel" },
    { src: mining, title: "GoCorp", category: "Mining" },
    { src: organizations, title: "Kampus Merdeka", category: "Organizations" },
    { src: retail, title: "Taldo", category: "Retail" },
    { src: smess2, title: "Xendit", category: "SME`S" },
    { src: smes, title: "Teman Belajar", category: "SME`S" },
    { src: se, title: "Voucherku", category: "SME`S" },
    { src: startup, title: "Original", category: "Startup" },
    { src: training, title: "Original", category: "Training" },
  ];
  const dipData = [
    {
      id: 1,
      unit: "DIPDOP AGENCY",
      category: " CREATIVE & MARKETING AGENCY |",
      description:
        "DIPDOP Agency menyediakan solusi kreatif dan pemasaran digital untuk brand, UMKM, dan institusi. Kami membantu perencanaan strategi komunikasi, kampanye digital, serta aktivasi berbasis komunitas yang relevan dan berdampak.",
      scopes: [
        {
          text: "Digital marketing & campaign",
          image: "https://picsum.photos/600/400?random=1",
        },
        {
          text: "Branding & content strategy",
          image: "https://picsum.photos/600/400?random=2",
        },
        {
          text: "Event & community activation",
          image: "https://picsum.photos/600/400?random=3",
        },
      ],
      link: "https://dipdop.net",
    },
    {
      id: 2,
      unit: "DIPDOP MERCH",
      category: " CREATIVE MERCHANDISE PLATFORM |",
      description:
        "DIPDOP Merch menghadirkan produk merchandise sebagai media komunikasi brand, identitas komunitas, serta sarana kolaborasi kreatif dalam berbagai kampanye dan kegiatan.",
      scopes: [
        {
          text: "Limited collaboration items",
          image: "https://picsum.photos/600/400?random=1",
        },
        {
          text: "Custom product untuk brand & CSR",
          image: "https://picsum.photos/600/400?random=2",
        },
        {
          text: "Merchandise komunitas & event",
          image: "https://picsum.photos/600/400?random=3",
        },
      ],
      link: "https://www.ciptaloka.com/+dipdop/",
    },
    {
      id: 3,
      unit: "DIPDOP COMMUNITY",
      category: " DEVELOPMENT & COLLABORATION HUB |",
      description:
        "DIPDOP Community merupakan ruang kolaboratif bagi pelaku UMKM, anak muda, kreator, dan komunitas untuk bertumbuh melalui program edukasi, diskusi, dan kolaborasi lintas sektor.",
      scopes: [
        {
          text: "Webinar & kelas edukasi",
          image: "https://picsum.photos/600/400?random=1",
        },
        {
          text: "Program komunitas & mentoring",
          image: "https://picsum.photos/600/400?random=2",
        },
        {
          text: "Kolaborasi brand & CSR",
          image: "https://picsum.photos/600/400?random=3",
        },
      ],
      link: "https://www.instagram.com/dipdop.community",
    },
    {
      id: 4,
      unit: "UMKM UPDATE",
      category: " DIGITAL MEDIA FOR UMKM |",
      description:
        "UMKM Update adalah media digital yang berfokus pada edukasi, informasi, dan eksposur UMKM. Media ini menjadi kanal distribusi konten, kampanye, dan pesan brand yang ingin menjangkau pelaku usaha secara langsung.",
      scopes: [
        {
          text: "Edukasi & insight UMKM",
          image: "https://picsum.photos/600/400?random=1",
        },
        {
          text: "Promosi & storytelling",
          image: "https://picsum.photos/600/400?random=2",
        },
        {
          text: "Kampanye kolaboratif",
          image: "https://picsum.photos/600/400?random=3",
        },
      ],
      link: "https://www.instagram.com/umkmupdate.id",
    },
  ];
  const collaborationData = {
    title: "WHY COLLABORATE WITH DIPDOP",
    reasons: [
      "PENDEKATAN EKOSISTEM, BUKAN ONE-OFF PROJECT",
      "AKSES LANGSUNG KE KOMUNITAS & UMKM",
      "FLEKSIBEL UNTUK BRAND, CSR, DAN INSTITUSI",
      "BERORIENTASI DAMPAK, BUKAN SEKADAR EXPOSURE",
    ],
    footer: {
      tagline: "CREATING IMPACT THROUGH COLLABORATION",
      description:
        "DIPDOP TELAH TERLIBAT DALAM BERBAGAI PROGRAM EDUKASI, KOMPETISI BISNIS, WEBINAR, SERTA INISIATIF PEMBERDAYAAN UMKM DAN KOMUNITAS MUDA DI TINGKAT LOKAL HINGGA NASIONAL.",
    },
  };
  const contactData = {
    title: "LET'S BUILD IMPACT TOGETHER",
    description:
      "KAMI TERBUKA UNTUK KOLABORASI DENGAN BRAND, PERUSAHAAN, INSTITUSI, DAN ORGANISASI YANG INGIN TUMBUH BERSAMA EKOSISTEM KREATIF DAN UMKM INDONESIA.",
    actions: [
      { label: "START COLLABORATION", url: "https://dipdop.net/hire-us/" },
      { label: "CONTACT DIPDOP", url: "https://www.instagram.com/dipdop.id/" },
    ],
  };

  const filteredLogos =
    activeCategory === "All"
      ? colaboratorLogo
      : colaboratorLogo.filter((logo) => logo.category === activeCategory);
  const categories = [
    "Training",
    "Startup",
    "SME`S",
    "Retail",
    "Mining",
    "Hotel",
    "Goverment",
    "FNB",
    "Consulting",
    "Banking",
    "Agriculture",
    "Organizations",
  ];

  return (
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
        {/** Hero */}
        <section
          id="hero"
          className="relative min-h-screen rounded-b-2xl grid grid-cols-1 md:grid-cols-2 font-sans bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${Team})` }}
        >
          <div className="absolute top-0 right-0 backdrop-blur-xl w-full border-gray-800 border-b h-20 flex justify-center items-center z-20">
            <h2 className="text-center px-4 poppins-bold text-lg md:text-4xl text-gray-900 font-bold uppercase flex flex-wrap justify-center items-center gap-2">
              <span className="text-[#358dad]">DIPDOP</span> UNIVERSE
            </h2>
          </div>

          <div className="hidden md:block"></div>
          <div className="relative group self-end w-full h-auto md:h-fit flex flex-col bg-white p-7 md:p-10 lg:p-10 xl:p-11 2xl:p-14 gap-6 rounded-tl-[50px]">
            <div className="absolute -top-[50px] right-0 w-[50px] h-[50px] hidden md:block">
              <div className="w-full h-full rounded-br-[50px] shadow-[20px_20px_0_20px_white]"></div>
            </div>

            <div className="absolute bottom-0 -left-[50px] w-[50px] h-[50px] hidden md:block">
              <div className="w-full h-full rounded-br-[50px] shadow-[20px_20px_0_20px_white]"></div>
            </div>
            <h1 className="roboto-a text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#0C2C55] font-bold leading-tight">
              Membangun Brand, Menggerakkan UMKM, Menciptakan Dampak Nyata
            </h1>

            <article className="text-sm font-sans lg:text-lg font-medium text-black max-w-xl">
              <span className="text-black font-bold transition-all duration-300  group-hover:underline">
                PT DIPDOP UNIVERSE CORP
              </span>{" "}
              adalah holding company berbasis ekosistem kreatif yang
              mengintegrasikan agency, media UMKM, dan produk kreatif.
            </article>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://dipdop.net"
                className="px-8 py-3 bg-[#6BA2B0] hover:bg-[#0C2C55] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-none"
              >
                Explore Ecosystem →
              </a>
              <a
                href="https://dipdop.net/hire-us/"
                className="px-8 py-3 border-2 border-[#6BA2B0] text-[#6BA2B0] hover:bg-[#6BA2B0] hover:text-white rounded-full font-bold transition-all"
              >
                Collaborate →
              </a>
            </div>
          </div>
        </section>
        {/** Overview */}
        <section
          id="overview"
          className="w-full h-auto md:h-auto flex flex-col md:flex-row gap-7 md:gap-20 justify-center items-center px-1 py-2 md:px-5 md:py-10 bg-white text-[#0C2C55] "
        >
          <div className="w-auto md:w-[50%] h-auto md:h-auto p-3 md:p-10 flex flex-col items-start gap-5">
            <h1 className="w-auto font-bold text-[#0C2C55] poppins-bold text-2xl md:text-6xl lg:text-8xl">
              TENTANG DIPDOP UNIVERSE CORP
            </h1>
            <article className="text-sm font-sans text-black lg:text-lg  md:text-lg ">
              PT DIPDOP UNIVERSE CORP merupakan holding company yang menaungi
              berbagai unit usaha di bidang kreatif, media, dan pemberdayaan
              UMKM. Kami berfokus pada pengembangan ekosistem kolaboratif yang
              menghubungkan brand, UMKM, komunitas, dan audiens melalui
              pendekatan strategis, partisipatif, dan berorientasi dampak.
              Dengan pengalaman dalam kampanye digital, edukasi, media UMKM, dan
              pengelolaan komunitas, DIPDOP hadir sebagai mitra strategis bagi
              perusahaan, institusi, dan organisasi yang ingin menciptakan
              pertumbuhan berkelanjutan sekaligus dampak sosial yang terukur.
            </article>
            <div className=" border-white border-8  w-full  h-auto rounded-2xl overflow-hidden shadow-2xl bg-transparent ">
              <video className="w-full h-auto" controls loop playsInline>
                <source src={vid1} type="video/quicktime" />
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="text-[#358dad] w-[50%] justify-center items-center gap-auto flex h-auto flex-col text-xs md:text-base  py-1 font-semibold">
            <CurvedLoop
              marqueeText="✦ Integrated Ecosystem Approach ✦ UMKM Empowerment Platform ✦ Community & Grassroots Engagement ✦ Creative & Marketing Expertise"
              speed={2.1}
              curveAmount={250}
              interactive
            />

            <BounceCards
              className="hidden justify-center items-center md:block"
              containerWidth={500} 
              containerHeight={400}
              images={images}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover
            />

            <div
              className="md:hidden block"
              style={{ width: 208, height: 208 }}
            >
              <Stack
                randomRotation={false}
                sensitivity={200}
                sendToBackOnClick={true}
                cards={images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`card-${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ))}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={false}
              />
            </div>
          </div>
        </section>
        {/** Achievements */}
        <section id="achievements" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[#0C2C55] poppins-bold text-4xl md:text-7xl font-bold uppercase leading-none mb-4">
                  Pencapaian <br />
                  <span className="text-[#2D6A76] italic">DIPDOP</span>
                </h2>
                <div className="h-1.5 w-32 bg-[#2D6A76] rounded-full"></div>
              </div>
              <p className="text-slate-600 roboto-a font-medium max-w-sm text-right hidden md:block">
                Dedikasi kami dalam membangun ekosistem digital dan pemberdayaan
                telah diakui oleh berbagai institusi nasional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
            <div className="relative bg-white border-2 border-[#6BA2B0] rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden group">
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
        {/** Ecosystem */}
        <section
          id="ecosystem"
          className="w-full h-auto pb-8 pt-8 flex justify-center flex-col  "
        >
          <div className="flex text-white poppins-bold justify-start items-start bg-white">
            <div className="bg-[#2D6A76] p-10 rounded-tr-[40px] relative">
              <p className="text-4xl md:text-8xl uppercase text-white font-extrabold leading-none">
                Our Ecosystem
              </p>
              <h1 className="text-lg text-white font-bold mt-4 max-w-2xl">
                Empat unit usaha yang saling terintegrasi untuk menjawab
                kebutuhan bisnis, komunitas, dan pemberdayaan UMKM.
              </h1>

              <div className="absolute -top-[40px] left-0 w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#2D6A76]"></div>
              </div>

              <div className="absolute bottom-0 hidden md:block -right-[40px] w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#2D6A76]"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-2 md:gap-8 p-2 md:p-10 rounded-b-3xl md:rounded-tr-4xl bg-[#2D6A76]">
            {dipData.map((d) => (
              <div
                key={d.id}
                className="bg-[#EDEDCE] group p-8 w-full font-sans rounded-3xl shadow-2xl"
              >
                <div className="flex relative flex-col gap-1  w-full">
                  <h1 className="text-4xl poppins-bol text-[#0C2C55] md:text-6xl font-black tracking-tighter  uppercase">
                    {d.unit}
                  </h1>
                  <div className="absolute lg:p-8 hidden 2xl:block right-0 top-0 ">
                    <CircularText
                      text={d.category}
                      onHover="pause"
                      spinDuration={20}
                      className="custom-class"
                    />
                  </div>
                  <div className="block w-full h-auto 2xl:hidden">
                    <ShinyText
                      text={d.category}
                      speed={3}
                      className="font-bold roboto-a "
                      delay={0}
                      color="#6BA2B0"
                      shineColor="#ffffff"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </div>
                  <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-[50%]"></div>
                </div>

                <p className="font-sans text-[#0C2C55] text-base font-bold mt-4 leading-relaxed max-w-xl">
                  {d.description}
                </p>

                <div className="w-full md:w-1/2 p-2 space-y-1 font-sans text-[#358dad] font-bold text-2xl ">
                  <div style={{ height: "200px", position: "relative" }}>
                    <FlowingMenu
                      items={d.scopes}
                      speed={8}
                      textColor="#358dad"
                      bgColor="#EDEDCE"
                      marqueeBgColor="#0C2C55"
                      marqueeTextColor="#ffffff"
                      borderColor="#2D6A76"
                    />
                  </div>
                </div>

                <a
                  href={d.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex bg-white text-[#358dad] px-6 py-3 rounded-4xl items-center gap-2 font-bold text-sm hover:bg-[#358dad] hover:text-white text-center transition-colors"
                >
                  LEARN MORE <span className=" text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-20 px-4 md:px-10">
          <h2 className="text-4xl md:text-7xl poppins-bold text-[#0C2C55] mb-12 font-bold uppercase leading-tight">
            More Than a Vendor. <br />
            Your{" "}
            <span className="text-[#2D6A76] italic">Ecosystem Partner</span>
          </h2>

          <div className="grid grid-cols-1 font-sans lg:grid-cols-12 gap-0 border border-gray-200 rounded-[40px] overflow-hidden shadow-sm">
            <div className="lg:col-span-5 bg-[#2D6A76] p-8 md:p-12 text-white flex flex-col justify-between relative">
              <h1 className="text-xl md:text-2xl font-bold leading-relaxed">
                DIPDOP tidak hanya menyediakan jasa, tetapi membangun ekosistem
                melalui integrasi agency, media, dan komunitas.
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
        <section
          id="why-us"
          className="bg-[#0C2C55] font-sans min-h-screen flex flex-col items-center pt-20"
        >
          <div className="w-full max-w-6xl px-6 mb-12">
            <h2 className="text-white text-left text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none poppins-bold opacity-90">
              {collaborationData.title}
            </h2>
          </div>

          <div className="w-full font-sans max-w-6xl flex flex-col md:flex-row items-stretch px-6 gap-0">
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

            <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center relative rounded-b-[40px] md:rounded-bl-none md:rounded-r-[40px] shadow-2xl">
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

          <div className="h-20"></div>
        </section>
        {/** Partner */}
        <section
          id="partners"
          className="relative w-full bg-white pt-24 pb-20 overflow-hidden"
        >
          <div className="relative group pt-8 z-10 w-full mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
              <div>
                <h2 className="text-[#0C2C55] text-4xl md:text-8xl font-black tracking-tighter uppercase poppins-bold">
                  Our <span className="text-[#0C2C55]">Partners</span>
                </h2>
                <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-full"></div>
              </div>
              <p className="text-[#0C2C55] font-bold uppercase tracking-widest text-lg">
                Trusted by industry leaders
              </p>
            </div>

            <div className="bg-slate-50/50 rounded-[40px] border border-slate-100 py-10">
              <div className="relative overflow-hidden h-[120px] flex items-center">
                <LogoLoop
                  logos={partnerLogos}
                  speed={40}
                  direction="left"
                  logoHeight={50}
                  gap={100}
                  hoverSpeed={10}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
            </div>
          </div>
        </section>
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
        {/** Collaborator */}
        <section id="collaborator" className="py-24 bg-white">
          <div className="w-full  mx-auto px-6">
            <div className="mb-12 w-auto group text-center md:text-left">
              <h2 className="text-[#0C2C55] text-5xl md:text-8xl font-black uppercase poppins-bold mb-4">
                Our <span className="text-[#0C2C55]">Network</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Klik kategori untuk melihat partner strategis kami
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
                    activeCategory === cat
                      ? "bg-[#0C2C55] text-white border-[#0C2C55] shadow-lg scale-105"
                      : "bg-transparent text-[#2D6A76] border-[#6BA2B0] hover:border-[#0C2C55] hover:text-[#0C2C55]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {activeCategory === "All" ? (
              <div className="relative overflow-hidden h-[180px] flex items-start">
                <LogoLoop
                  logos={colaboratorLogo}
                  speed={40}
                  direction="left"
                  logoHeight={80}
                  gap={100}
                  hoverSpeed={10}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
            ) : (
              <div className="flex flex-col md:flex-row w-auto justify-center items-center">
                {filteredLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col w-auto items-center justify-center p-6 bg-white"
                  >
                    <img
                      src={logo.src}
                      alt={logo.title}
                      className="min-h-[120px] max-h-[120px] w-auto object-contain mb-4 transition-all mix-blend-multiply"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/** Testimoni */}
        <section id="testimoni" className="w-full py-20">
          <div className="flex poppins-bold justify-start items-start bg-white">
            <div className="bg-[#6BA2B0] p-10 rounded-tr-[40px] relative">
              <p className="text-4xl md:text-8xl uppercase text-white font-extrabold leading-none">
                testimony
              </p>

              <div className="absolute -top-[40px] left-0 w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#6BA2B0]"></div>
              </div>

              <div className="absolute bottom-0 hidden md:block -right-[40px] w-[40px] h-[40px] overflow-hidden">
                <div className="w-full h-full rounded-bl-[40px] shadow-[-20px_20px_0_20px_#6BA2B0]"></div>
              </div>
            </div>
          </div>
          {/* Container CardSwap harus memiliki lebar yang jelas dan justify-center */}
          <div className="relative w-full overflow-hidden bg-[#6BA2B0] py-10">
            {/* Container Utama yang bergerak */}
            <div className="flex w-max animate-custom-marquee pause-on-hover">
              {/* Render Pertama */}
              <div className="flex gap-6 px-3">
                {reviews.map((r, index) => (
                  <ReviewCard key={`r1-${index}`} r={r} />
                ))}
              </div>

              {/* Duplikasi untuk Loop Tanpa Jeda */}
              <div className="flex gap-6 px-3">
                {reviews.map((r, index) => (
                  <ReviewCard key={`r2-${index}`} r={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/** Contact */}
        <section
          id="contact"
          className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-center bg-cover bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${Team})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0C2C55]/80 -z-10"></div>

          <div className="bg-white px-8 py-3 rounded-full mb-8 shadow-xl">
            <h2 className="text-[#0C2C55] font-black text-sm md:text-lg tracking-widest uppercase italic">
              {contactData.title}
            </h2>
          </div>

          <div className="relative w-full max-w-5xl bg-white p-8 md:p-20 flex flex-col md:flex-row gap-12 items-center rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#0C2C55] font-bold text-xl md:text-3xl leading-tight tracking-tight">
                {contactData.description}
              </p>
              <div className="mt-8 h-1 w-20 bg-[#6BA2B0] hidden md:block"></div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-6">
              {contactData.actions.map((action, index) => (
                <a
                  key={index}
                  href={action.url}
                  className="group flex flex-col bg-slate-50 hover:bg-[#0C2C55] p-6 rounded-3xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#0C2C55] group-hover:text-yellow-400 text-sm font-black uppercase tracking-widest mb-1 transition-colors">
                      Get in Touch
                    </span>
                    <span className="text-[#0C2C55] group-hover:text-white group-hover:translate-x-2 transition-all text-2xl">
                      →
                    </span>
                  </div>
                  <span className="text-2xl md:text-4xl font-black text-slate-800 group-hover:text-white tracking-tighter uppercase transition-colors">
                    {action.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import CircularText from "@/components/CircularText";
import SpotlightCard from "@/components/SpotlightCard";

export function Programs() {
  return (
    <section id="programs" className="w-full group h-auto py-24">
      <div className="flex px-8 w-full flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="max-w-3xl">
          <h2 className="text-[#0C2C55] poppins-bold text-4xl md:text-7xl font-bold uppercase leading-none mb-4">
            OUR PROGRAM <br />
            <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-full"></div>
          </h2>
        </div>
        <p className="text-slate-600 roboto-a font-medium max-w-sm text-right hidden md:block">
          DIPDOP National Initiative
        </p>
      </div>
      <div className=" font-sans bg-white/40 grid grid-cols-1 md:grid-cols-3 relative">
        <div className="p-8 border-b border-gray-100 md:border-r group hover:bg-gray-50 transition-colors cursor-default">
          <div className="w-10 h-10 bg-[#6BA2B0] text-white rounded-full mb-4 flex flex-col items-center justify-center font-bold">
            1
          </div>
          <h2 className="text-xl font-bold text-[#2D6A76] mb-2 uppercase">
            Digital Literacy
          </h2>
          <p className="text-gray-600 text-sm">
            Meningkatkan pemahaman generasi muda terhadap teknologi dan
            ekosistem digital.
          </p>
        </div>

        <div className="p-8 border-b md:border-r border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
          <div className="w-10 h-10 bg-[#6BA2B0] text-white rounded-full mb-4 flex items-center justify-center font-bold">
            2
          </div>
          <h2 className="text-xl font-bold text-[#2D6A76] mb-2 uppercase">
            Entrepreneurship Education
          </h2>
          <p className="text-gray-600 text-sm">
            Mendorong lahirnya wirausaha muda berbasis digital.
          </p>
        </div>

        <div className="p-8 border-b md:border-r border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
          <div className="w-10 h-10 bg-[#6BA2B0] text-white rounded-full mb-4 flex items-center justify-center font-bold">
            3
          </div>
          <h2 className="text-xl font-bold text-[#2D6A76] mb-2 uppercase">
            Industry Collaboration
          </h2>
          <p className="text-gray-600 text-sm">
            Membuka peluang kolaborasi dengan dunia usaha melalui program CSR
            dan kemitraan strategis
          </p>
        </div>
      </div>
      <div className="w-full h-auto md:p-8 bg-white flex md:flex-row relative flex-col gap-[20px] justify-center items-center ">
        <div className="w-full h-[1550px] relative md:w-[50%] flex-col bg-[#6BA2B0] p-5 md:p-10 md:h-[1400px] 2xl:h-[1200px] gap-8 flex rounded-2xl  ">
          <div className="h-fit w-fit max-h-[500px] shadow-2xl rounded-2xl ">
            <img src="/campus.jpeg" className="h-full rounded-2xl" alt="" />
          </div>
          <article className=" text-lg text-white">
            <p className="text-4xl font-bold uppercase poppins-bold">
              Program untuk Kampus
            </p>
            <br />
            <p className="text-4xl font-bold uppercase poppins-bold">
              Mencetak 100.000 Pengusaha Digital dari Lingkungan Kampus
            </p>
            <br />
            <p className="text-base">
              Program ini merupakan inisiatif DIPDOP untuk mendorong lahirnya
              generasi wirausaha digital dari lingkungan perguruan tinggi.
              Melalui pendekatan edukasi praktis, mahasiswa akan diperkenalkan
              pada berbagai peluang bisnis digital yang relevan dengan
              perkembangan teknologi saat ini.
            </p>{" "}
            <br />
            <p className="text-base">
              Peserta tidak hanya mendapatkan pemahaman teori, tetapi juga
              dibimbing untuk memahami cara membangun dan mengembangkan usaha
              berbasis digital secara nyata, mulai dari ide bisnis hingga
              strategi pemasaran.
            </p>{" "}
            <br />
            <p className="text-base">
              Program ini dirancang untuk membantu mahasiswa menjadi talenta
              kreatif, inovatif, dan siap menghadapi tantangan ekonomi digital
              di masa depan. Untuk mengetahui konsep program, skema pelaksanaan,
              serta peluang kolaborasi lebih lanjut, silakan unduh proposal
              lengkap dengan mengklik tautan berikut:
            </p>
          </article>
          <a
            href={
              "https://api.whatsapp.com/send?phone=62811305490&text=Hello,%20DIPDOP?%20Saya%20mau%20proposal%20Kampus"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-fit inline-flex border border-white bg-[#6BA2B0] text-white px-4 py-2 rounded-4xl items-center gap-2 font-bold text-sm hover:bg-white hover:text-[#6BA2B0] absolute bottom-[8%] text-center transition-colors"
          >
            Download Proposal Program <span className=" text-lg">→</span>
          </a>
        </div>
        <div className="w-[300px] absolute hidden md:block -bottom-15 left-1/2 z-1 flex">
          <div className="flex flex-col justify-center items-center -bottom-15 left-1/2 w-fit pt-10 rounded-4xl -translate-x-1/2  pointer-events-none">
            <div className="flex gap-[20px] bg-transparent">
              <div className="w-[30px] h-[50px] rounded-br-full shadow-[10px_10px_0_10px_white]  "></div>
              <div className="w-[30px] h-[50px] rounded-bl-full shadow-[-10px_10px_0_10px_white]  "></div>
            </div>
            <div className="w-full relative flex">
              <div className="w-[40px]  h-[50px] mt-[70px] rounded-br-full shadow-[10px_10px_0_10px_white]  "></div>
              <div className="bg-white relative flex items-center justify-center p-4 rounded-t-[70px]  pointer-events-auto">
                <CircularText
                  text="DIPDOP National Initiative  |   "
                  onHover="pause"
                  className="text-sm font-base"
                  spinDuration={20}
                />
                <span className="absolute text-4xl text-[#6BA2B0]">↓</span>
              </div>
              <div className="w-[40px] h-[50px] mt-[70px] rounded-bl-full shadow-[-10px_10px_0_10px_white]  "></div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1550px]  relative md:w-[50%] flex-col bg-[#0C2C55] p-5 md:p-10 items-end md:h-[1400px] 2xl:h-[1200px] gap-4 flex rounded-2xl  ">
          <div className="h-fit w-fit max-h-[500px] shadow-2xl rounded-2xl ">
            <img src="/sma.jpeg" className="h-full rounded-2xl" alt="" />
          </div>
          <article className=" text-end text-lg text-white">
            <p className="text-4xl font-bold uppercase poppins-bold">
              Program untuk Sekolah
            </p>
            <br />
            <p className="text-4xl font-bold uppercase poppins-bold">
              Bekal Sukses Sejak Sekolah: Belajar Bisnis Digital dengan Cara
              Menyenangkan
            </p>
            <br />
            <p className="text-base">
              Program ini merupakan bagian dari upaya DIPDOP dalam
              memperkenalkan literasi digital dan kewirausahaan sejak usia
              sekolah. Melalui metode pembelajaran yang interaktif dan
              menyenangkan, para pelajar diajak untuk mengenal dunia bisnis
              digital dengan cara yang mudah dipahami.
            </p>{" "}
            <br />
            <p className="text-base">
              Materi program dirancang agar siswa dapat memahami dasar-dasar
              kewirausahaan digital, mulai dari mengenali peluang usaha,
              kreativitas dalam membuat produk, hingga pemanfaatan platform
              digital untuk berjualan.
            </p>{" "}
            <br />
            <p className="text-base">
              Dengan pendekatan yang inspiratif dan aplikatif, program ini
              diharapkan dapat menumbuhkan mental kreatif, mandiri, dan berani
              berinovasi sejak dini.Untuk mengetahui konsep program dan detail
              pelaksanaannya, silakan unduh proposal lengkap melalui tautan
              berikut:
            </p>
          </article>
          <a
            href={
              "https://api.whatsapp.com/send?phone=62811305490&text=Hello,%20DIPDOP?%20Saya%20mau%20proposal%20Sekolah"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-fit inline-flex border border-white bg-[#0C2C55] text-white px-4 py-2 rounded-4xl items-center gap-2 font-bold text-sm hover:bg-white hover:text-[#0C2C55] absolute bottom-[8%] text-center transition-colors"
          >
            Download Proposal Program <span className=" text-lg">→</span>
          </a>
        </div>
      </div>
      <div className="w-full mt-24 md:p-1 relative group">
        <div className="absolute inset-0 bg-gradient-to-r rounded-[32px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

        <div className="relative bg-transparent p-8 md:p-20 rounded-[32px] border border-white/10 flex flex-col items-center text-center overflow-hidden">
         
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6BA2B0]/50 to-transparent"></div>

          <div className="max-w-6xl flex items-center justify-center flex-col gap-1">
           
            <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-[#6BA2B0] border border-[#0C2C55] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0C2C55] animate-pulse"></span>
              <span className="text-white text-xs tracking-[0.2em] uppercase font-bold">
                CSR
              </span>
            </div>

            <h2 className="text-black poppins-bold text-4xl md:text-6xl font-bold uppercase tracking-tight mb-1">
              Corporate{" "}
              <span className="text-[#6BA2B0]">Social Initiative</span>
            </h2>

            <p className="text-black text-xl md:text-2xl max-w-4xl mb-6 font-bold">
              Mendorong Akselerasi Generasi Muda dalam Ekosistem Ekonomi Digital
            </p>
            <p className="text-[#0C2C55] text-xl md:text-2xl font-light max-w-2xl mb-4 mx-auto">
              DIPDOP membuka peluang kolaborasi bagi perusahaan yang ingin
              berkontribusi melalui program Corporate Social Responsibility
              (CSR) dalam bidang pendidikan, literasi digital, kewirusahaan dan
              melalui program ini, perusahaan dapat berperan aktif dalam
              mendukung pelaksanaan dua inisiatif utama DIPDOP:
            </p>

            <div className="grid md:grid-cols-2 max-w-4xl gap-8 text-left mb-16">
              <div className="p-6 rounded-2xl bg-[#0C2C55] border border-[#0C2C55] hover:shadow-2xl transition-colors">
                <h3 className="text-white font-bold mb-3">Mahasiswa Digital</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Program inkubasi kewirausahaan untuk mencetak talenta kreatif
                  di lingkungan kampus.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0C2C55] border border-[#0C2C55] hover:shadow-2xl transition-colors">
                <h3 className="text-white font-bold mb-3">Literasi Sekolah</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Edukasi bisnis digital interaktif untuk menumbuhkan mental
                  inovator sejak dini.
                </p>
              </div>
            </div>

            <p className="text-black mb-2 text-base md:text-lg  max-w-2xl mx-auto">
              Kolaborasi ini adalah jembatan bagi perusahaan Anda untuk
              meninggalkan dampak sosial yang nyata dan berkelanjutan bagi masa
              depan ekonomi digital bangsa. Kolaborasi ini tidak hanya
              memberikan dampak sosial yang nyata, tetapi juga menjadi bagian
              dari kontribusi perusahaan dalam mempersiapkan generasi muda yang
              adaptif terhadap ekonomi digital.
            </p>
            <p className="text-black mb-2 text-base md:text-lg  max-w-2xl mx-auto">
              Perusahaan yang tertarik untuk mendukung atau berkolaborasi dalam
              program ini dapat menghubungi tim DIPDOP untuk informasi lebih
              lanjut mengenai skema kerja sama dan implementasi program.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=62811305490&text=Hello,%20DIPDOP?%20Saya%20mau%20kolaborasi%20CSR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border border-[#6BA2B0] bg-white text-[#358dad] px-6 py-4 rounded-4xl items-center gap-2 font-bold text-xl text-center hover:bg-[#6BA2B0] hover:text-white text-center transition-colors"
            >
              Mulai Kolaborasi Strategis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

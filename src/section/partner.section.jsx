import LogoLoop from "@/components/LogoLoop";
import dealls from "/dealls.jpg";
import kerja from "/kerja.png";
import glint from "/glint.png";
import pijar from "/pijar.png";
import cc from "/cc.png";
import cakap from "/cakap.png";
import dana from "/dana.webp";
import gocorp from "/gocorp.png";
import kampus from "/kampus.png";
import taldo from "/taldo.png";
import voucherku from "/voucherku.svg";
import xendit from "/xendit.svg";
import tembapbelajar from "/Tempat_Belajar.png";
import original from "/original.webp";
import harisenin from "/harisenin1.png";
import Eduwork from "/eduwork1.png";

export function Partner() {
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
        { src: harisenin, title: "Harisenin", href: "" },
        { src: Eduwork, title: "Eduwork", href: "" },
      ];
  return (
    <>
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
                logoHeight={55}
                gap={80}
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
    </>
  );
}

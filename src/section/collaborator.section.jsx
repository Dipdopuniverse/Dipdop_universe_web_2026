import LogoLoop from "@/components/LogoLoop";
import agriculture from "/agriculture.png";
import banking from "/banking.png";
import consulting from "/consulting.png";
import educational1 from "/edu1.png";
import educational2 from "/edu2.png";
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
import { useState } from "react";

export function Collaborator() {
  const [activeCategory, setActiveCategory] = useState("All");
  const colaboratorLogo = [
    { src: agriculture, title: "Dealls", category: "Agriculture" },
    { src: banking, title: "IKERJA", category: "Banking" },
    { src: consulting, title: "Glints", category: "Consulting" },
    { src: educational1, title: "Pijar Mahir", category: "Educational" },
    { src: educational2, title: "Pijar Mahir", category: "Educational" },
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
  const filteredLogos =
    activeCategory === "All"
      ? colaboratorLogo
      : colaboratorLogo.filter((logo) => logo.category === activeCategory);
  const categories = [
    "Educational",
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
    <>
      {/** Collaborator */}
      <section id="collaborator" className="py-24 bg-white">
        <div className="w-full group mx-auto px-6">
          <div className="mb-12 w-auto group gap-2 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="text-[#0C2C55] poppins-bold text-4xl md:text-7xl font-bold uppercase leading-none mb-4">
                OUR NETWORK
              </h2>
              <div className="h-1.5 bg-[#6BA2B0] w-16 transition-all duration-500 group-hover:w-full"></div>
            </div>
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
                logoHeight={50}
                gap={80}
                hoverSpeed={10}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                className="object-contain transition-all"
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
    </>
  );
}

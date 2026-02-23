import Team from "/grub.jpg";

export function Hero() {
  return (
    <>
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
    </>
  );
}

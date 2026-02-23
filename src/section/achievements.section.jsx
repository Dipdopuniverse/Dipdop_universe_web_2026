import cakap from "/cakap.png";
import tembapbelajar from "/tempatbelajar.webp";
import bankuob from "/UOB-Bank.png";
import bankbjb from "/bank_bjb.png";
import bankindonesia from "/Bank _indonesia.png";
import grab from "/Grab.png";
import Kemenin from "/kemenin.png";
import start4 from "/startup4.png";

export function Achievements() {
  return (
    <>
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
    </>
  );
}

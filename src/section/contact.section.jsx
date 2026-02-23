import Team from "/grub.jpg";

export function Contact() {
  const contactData = {
    title: "LET'S BUILD IMPACT TOGETHER",
    description:
      "KAMI TERBUKA UNTUK KOLABORASI DENGAN BRAND, PERUSAHAAN, INSTITUSI, DAN ORGANISASI YANG INGIN TUMBUH BERSAMA EKOSISTEM KREATIF DAN UMKM INDONESIA.",
    actions: [
      { label: "START COLLABORATION", url: "https://dipdop.net/hire-us/" },
      { label: "CONTACT DIPDOP", url: "https://www.instagram.com/dipdop.id/" },
    ],
  };
  return (
    <>
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
    </>
  );
}

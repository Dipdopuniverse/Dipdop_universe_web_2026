import CircularText from "@/components/CircularText";
import FlowingMenu from "@/components/FlowingMenu";
import ShinyText from "@/components/ShinyText";

export function Ecosystem() {
    
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
  return (
    <>
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
              Empat unit usaha yang saling terintegrasi untuk menjawab kebutuhan
              bisnis, komunitas, dan pemberdayaan UMKM.
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
                className="mt-8 inline-flex border border-[#6BA2B0] bg-white text-[#358dad] px-4 py-2 rounded-4xl items-center gap-2 font-bold text-sm hover:bg-[#6BA2B0] hover:text-white text-center transition-colors"
              >
                LEARN MORE <span className=" text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

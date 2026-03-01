
import BuSopy from "/busopy.png";

import dip1 from "/dip1.jpg";
import dip2 from "/dip2.jpg";
import dip3 from "/dip3.jpg";
import dip4 from "/dip4.jpg";
import dip5 from "/dip5.jpg";
import vid1 from "/vid1.MOV";
import CurvedLoop from "../components/CurvedLoop";
import BounceCards from "../components/BounceCards";
import Stack from "../components/Stack";

export function Overview() {
    const transformStyles = [
    "rotate(10deg) translate(-150px)",
    "rotate(5deg) translate(-75px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(75px)",
    "rotate(2deg) translate(150px)",
  ];
  const images = [dip1, dip2, dip3, dip4, dip5];
  return (
    <>
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
            berbagai unit usaha di bidang kreatif, media, dan pemberdayaan UMKM.
            Kami berfokus pada pengembangan ekosistem kolaboratif yang
            menghubungkan brand, UMKM, komunitas, dan audiens melalui pendekatan
            strategis, partisipatif, dan berorientasi dampak. Dengan pengalaman
            dalam kampanye digital, edukasi, media UMKM, dan pengelolaan
            komunitas, DIPDOP hadir sebagai mitra strategis bagi perusahaan,
            institusi, dan organisasi yang ingin menciptakan pertumbuhan
            berkelanjutan sekaligus dampak sosial yang terukur.
          </article>
          <div className=" border-white border-8  w-full  h-auto rounded-2xl overflow-hidden shadow-2xl bg-transparent ">
            <video className="w-full h-auto" controls loop playsInline>
              <source src={vid1} type="video/quicktime" />
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="text-[#358dad] w-[80%] md:w-[50%]  justify-center items-center flex h-auto flex-col text-xs md:text-base  py-1 font-semibold">
          <div className="w-full h-auto p-1">
            <img
              src={BuSopy}
              alt=""
              className="w-full h-auto mix-blend-multiply object-contain"
            />
          </div>
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

          <div className="md:hidden block" style={{ width: 208, height: 208 }}>
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
    </>
  );
}

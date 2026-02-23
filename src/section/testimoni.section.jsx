import ReviewCard from "@/components/ReviewCard";
import { useEffect, useState } from "react";
import Papa from "papaparse";


export function Testimoni() {
  const [reviews, setReviews] = useState([]);
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

  return (
    <>
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
    </>
  );
}

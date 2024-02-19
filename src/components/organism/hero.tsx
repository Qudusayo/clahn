import { useResolvedPath } from "react-router-dom";
import Button from "../ui/button";
import { HeroBg } from "@/assets/images";
import { useEffect, useState } from "react";

function Hero({
  heroImg,
  title,
  description,
  colouredBg,
  showDonateButton,
}: {
  heroImg: string;
  title: React.ReactNode | string;
  description: string;
  colouredBg?: boolean;
  showDonateButton?: boolean;
}) {
  const { pathname } = useResolvedPath("");
  const [routeTitle, setRouteTitle] = useState("");

  useEffect(() => {
    const page = pathname.slice(1);
    if (page) {
      setRouteTitle(page[0].toUpperCase() + page.slice(1).split("-").join(" "));
    }
  }, [pathname]);

  return (
    <div
      className="min-h-[80vh] grid grid-cols-2 items-center px-16 relative"
      style={{
        background: !colouredBg
          ? `url(${HeroBg}), lightgray 50% / cover no-repeat`
          : "#BFFFE0",
        mixBlendMode: !colouredBg ? "darken" : "normal",
        backgroundColor: !colouredBg ? "#fafbfbb3" : "#BFFFE0",
      }}
    >
      <div className=" col-span-1 flex flex-col items-start gap-10">
        {routeTitle && (
          <div className="bg-white text-[#1B1717] flex items-center justify-center gap-2 text-xl p-4 rounded-2xl border-l-2 border-[#188038]">
            <span>Home</span>
            <span className="text-balance">/</span>
            <div className="text-balance relative">
              <span>{routeTitle}</span>
              <div className="absolute w-3/5 h-1 bg-[#F36F00] rounded-lg bottom-0"></div>
            </div>
          </div>
        )}
        <h1 className="text-6xl font-bold text-balance text-left">{title}</h1>
        <p className="text-balance text-xl">{description}</p>
        {showDonateButton && <Button>Donate</Button>}
      </div>
      <div className="order-1 relative col-span-1 flex items-center justify-center">
        <img
          src={heroImg}
          alt="selfie"
          className="w-4/5 max-w-[600px] object-cover rounded-3xl z-10 relative"
        />
        <div className="bg-[#03874894] w-[515px] h-[239px] rounded-t-3xl absolute -top-5 mx-auto"></div>
      </div>
      <div className="bg-[#03874894] h-[90%] w-3 absolute"></div>
    </div>
  );
}

export default Hero;
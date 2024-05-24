import React from "react";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "@/assets/images";
import MaxComponent from "./organism/MaxComponent";

const Partners = () => {
  return (
    <div className="w-full my-28 space-y-10">
      <h2 className="text-center text-4xl font-bold">Our Partners</h2>
      <div className="flex md:items-center md:justify-center gap-5 w-full md:w-11/12 mx-auto overflow-x-auto">
        {[Partner1, Partner2, Partner3, Partner4, Partner5].map(
          (partner, index) => (
            <PartnerCard key={index} image={partner.src} />
          )
        )}
      </div>
    </div>
  );
};

const PartnerCard = ({ image }: { image: string }) => {
  return (
    <div className="flex max-h-[171px] min-w-36 md:flex-1 items-center justify-center bg-[#EBF4F2] px-10 py-10">
      <img src={image} alt="Partner 1" className="w-auto" />
    </div>
  );
};

export default Partners;

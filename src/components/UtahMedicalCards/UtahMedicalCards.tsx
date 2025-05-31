import React from "react";
import Image from "next/image";

function UtahMedicalCards() {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-screen-xl mx-auto px-4 sm:px-40 gap-10">
      <h2 className="text-3xl sm:hidden font-bold text-[#0b3d00] text-center mb-4">
        Utah Medical Cards
      </h2>

      <div className="flex justify-center  w-full sm:w-1/2">
        <div className="relative w-[290px] h-[336px] sm:w-[400px] sm:h-[400px]">
          <Image
            src="/assets/Consultation@2x.png"
            alt="Consultation"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex flex-col justify-start items-center sm:items-start text-center sm:text-left pt-3">
        <h2 className="hidden sm:block text-4xl font-bold text-[#0b3d00] mb-6">
          Utah Medical Cards
        </h2>

        <p className="text-base sm:text-lg text-[#808080] leading-relaxed hyphenate">
          A medical cannabis card, also known as a medical marijuana card, is a
          state-issued identification card that allows qualified patients to
          legally purchase and use medical cannabis for the treatment of
          specific medical conditions. In Utah, a card is required to access and
          purchase medical cannabis products from state-licensed dispensaries.
          Having a medical card does not allow you to possess any cannabis
          product but only the products you purchased under your PAT (Medical
          Card ID number).
        </p>
      </div>
    </div>
  );
}

export default UtahMedicalCards;

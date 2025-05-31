import Image from "next/image";
import React from "react";

const ReviewBanner = () => {
  return (
    <>
      <div className="hidden sm:block relative w-full max-w-[920px] mx-auto overflow-hidden ">
        <Image
          src="/assets/updated/ReviewBanner@2x.png"
          alt="Review Background"
          width={980}
          height={220}
          className="w-full h-auto"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 sm:px-12 text-white">
          <h2 className="text-xl sm:text-3xl font-bold mb-4">
            We’d love to hear from you!
          </h2>
          <a
            href="#"
            aria-label="Leave a review"
            className="bg-[#eac8a5] text-[#0b3d00] font-semibold px-6 py-3 rounded-full inline-block w-fit"
          >
            Review us here!
          </a>
        </div>
      </div>

      <div className="block sm:hidden w-full max-w-[920px] mx-auto bg-[#0b3d00] rounded-md py-8 px-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">We’d love to hear from you!</h2>
        <a
          href="#"
          aria-label="Leave a review"
          className="bg-[#eac8a5] text-[#0b3d00] font-semibold px-6 py-3 rounded-full inline-block"
        >
          Review us here!
        </a>
      </div>
    </>
  );
};

export default ReviewBanner;

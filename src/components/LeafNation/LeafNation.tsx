"use client";
import React from "react";
import Image from "next/image";

function LeafNation() {
  return (
    <div className="mt-10 px-11 flex flex-col items-end">
      <Image
        src="/assets/MockBannerAd@2x.png"
        alt="Leaf Nation Banner Ad"
        width={900}
        height={100}
      />
      <p className="text-[#808080] pr-2">Ad</p>
    </div>
  );
}

export default LeafNation;

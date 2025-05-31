"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          About Utah Grown
        </h2>
        <p className="text-[#808080] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore.
        </p>
        <h3 className="text-2xl font-bold text-green-900">Utah Grown Office</h3>
        <p className="text-[#808080] font-semibold">730 State Street</p>
        <p className="text-[#808080] font-semibold">
          Salt Lake City, Utah 84111
        </p>
      </div>

      <div className="flex justify-center -mb-12 sm:-mb-20 z-10 relative">
        <Image
          src="/assets/NormalizeItUtah.png"
          alt="Normalize It Utah"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

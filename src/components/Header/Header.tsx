import React, { JSX } from "react";
import Image from "next/image";

function Header(): JSX.Element {
  return (
    <header className="relative">
      <div className="hidden md:block">
        <div className="relative w-full h-[609px] bg-[url('/assets/TopHeaderImage@2x.png')] bg-cover bg-center bg-no-repeat z-0">
          <nav className="w-full py-10">
            <div className="max-w-screen-xl mx-auto w-full flex justify-center">
              <ul className="flex w-full justify-between text-[#103c00] px-30 ">
                <li>
                  <a href="#">APPOINTMENTS</a>
                </li>
                <li>
                  <a href="#">MEDICAL CARD INFO</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">PHARMACIES</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="absolute top-[320px] left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <Image
            src="/assets/updated/UtahGrownLogoWhiteBorder@2x.png"
            width={668}
            height={330}
            alt="Utah Grown Logo"
            className="w-[668px] h-[330px] min-w-[668px] max-w-none"
            unoptimized
          />
        </div>
      </div>

      <div className="hidden md:flex w-full h-[51px] bg-[#35711f] items-start justify-start" />

      <div className="w-full h-[51px] bg-[#35711f] flex items-center justify-between p-4 md:hidden py-2">
        <Image
          src="/assets/updated/UtahGrownLogoWhiteBorder.png"
          width={70}
          height={51}
          alt="Utah Grown Logo"
          unoptimized
        />
        <Image
          src="/assets/burger.png"
          width={30}
          height={20}
          alt="Utah Grown Logo"
          unoptimized
        />
      </div>
    </header>
  );
}

export default Header;

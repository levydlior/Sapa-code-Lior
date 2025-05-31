import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-green-900">
      <div className="bg-white px-6 py-1 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/updated/UtahGrownLogoWhiteBorder.png"
            alt="Utah Grown Logo"
            width={120}
            height={60}
          />
          <span className="text-sm text-green-900 font-medium tracking-wide">
            UTAH’S CANNABIS COMMUNITY
          </span>
        </div>
      </div>

      <div className="bg-[#245B2B] text-white text-sm px-6 pt-2 pb-8">
        <div className="text-[10px] flex flex-col items-end gap-3">
          <div className="flex gap-6">
                      <span>©2023 All Rights Reserved.</span>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

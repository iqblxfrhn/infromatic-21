import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[20px]">
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text text-gray-200">
            Informatic 21
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#profile" className="cursor-pointer">
              Profile
            </a>
            <a href="#learn" className="cursor-pointer">
              Learn
            </a>
            <a href="#dosen" className="cursor-pointer">
              Dosen
            </a>
          </div>
        </div>

        <div className="flex cursor-pointer">
          <a href="#team" className="font-bold text-gray-200">
            Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

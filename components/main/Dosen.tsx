import Image from "next/image";
import React from "react";

const Dosen = () => {
  return (
    <div
      id="dosen"
      className="flex flex-col items-center justify-center py-10 mb-36"
    >
      <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Profile Dosen
      </h1>
      <div className="flex flex-col relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] justify-center items-center">
        <Image
          src="/udin.jpg"
          alt="foto dosen"
          width={1000}
          height={1000}
          className="w-80 m-5 object-contain rounded-full"
        />

        <div className="relative p-4 justify-center items-center text-center">
          <h1 className="text-2xl font-semibold text-white">
            Amalia Agung Septarina, S.S.T., M.Tr.T.
          </h1>
          <p className="mt-2 text-gray-300 font-semibold text-xl">
            Multimedia Grafis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dosen;

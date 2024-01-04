import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const TeamCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] items-center justify-center">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain rounded-full p-5"
      />

      <div className="relative p-4 justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-2xl font-semibold text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;

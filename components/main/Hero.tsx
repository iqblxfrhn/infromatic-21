import HeroContent from "@/components/sub/HeroContent";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="#">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] w-full h-full left-0 z-[1] object-cover"
      >
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

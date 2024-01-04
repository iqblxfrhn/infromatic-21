import React from "react";
import TeamCard from "../sub/TeamCard";

const Team = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-12"
      id="team"
    >
      <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16">
        Our Team
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <TeamCard
          src="/iqbal.jpg"
          title="Iqbal Farhan Nuruddin"
          description="21552021013"
        />
        <TeamCard
          src="/udin.jpg"
          title="Syaifuddin Zuhri"
          description="21552021027"
        />
        <TeamCard
          src="/rahmat.jpg"
          title="Muhammad Rahmat Mutik"
          description="21552021025"
        />
      </div>
    </div>
  );
};

export default Team;

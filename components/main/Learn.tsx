import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Learn = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 mb-40"
      id="learn"
    >
      <h1 className="text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Learn Something
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/algoritma.webp"
          title="Algoritma dan Pemrograman"
          description="Algoritma Pemrograman adalah langkah- langkah yang ditulis secara berurutan untuk menyelesaikan masalah pemrograman komputer."
        />
        <ProjectCard
          src="/statistika.png"
          title="Statistika"
          description="Statistika adalah sebuah ilmu yang mempelajari bagaimana cara merencanakan, mengumpulkan, menganalisis, lalu menginterpretasikan, dan akhirnya mempresentasikan data."
        />
        <ProjectCard
          src="/database.png"
          title="Struktur Data"
          description="Struktur data adalah cara menyimpan dan mengatur data secara terstruktur pada sistem komputer atau pangkalan data (database) sehingga lebih mudah diakses."
        />
      </div>
    </div>
  );
};

export default Learn;

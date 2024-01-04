import Dosen from "@/components/main/Dosen";
import Hero from "@/components/main/Hero";
import Learn from "@/components/main/Learn";
import Profile from "@/components/main/Profile";
import Team from "@/components/main/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20"></div>
      <Hero />
      <Profile />
      <Learn />
      <Dosen />
      <Team />
    </main>
  );
}

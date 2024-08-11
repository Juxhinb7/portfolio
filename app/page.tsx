import Image from "next/image";
import Profile from "@/public/profileIcon.jpg";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div>
      <div className="space-y-4 flex flex-col">
        <Image src={Profile} width={115} height={115} alt="Profile image" style={{borderRadius: "100px", marginInline: "auto"}} className="hover:contrast-50"/>
        <About />
        <Skills />
      </div>
      
    </div>
  );
}

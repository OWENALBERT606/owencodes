import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Socials from "@/components/Socials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-400 flex flex-col justify-center items-center">
      <NavBar/>
      <Hero/>
      <Socials/>
    
    </main>
  );
}

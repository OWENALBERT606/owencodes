import About from "@/components/About";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Mywork from "@/components/Mywork";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-400 flex flex-col justify-center items-center">
     
      <Hero/>
      <Socials/>
      <About/>
      <Services/>
      <Mywork/>
      <Map/>    
    </main>
  );
}

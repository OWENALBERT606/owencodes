import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-400 flex flex-col justify-center items-center">
      <NavBar/>
      <Hero/>
      <Socials/>
      <About/>
      <Services/>
      <Map/>
      <Footer/>
    
    </main>
  );
}

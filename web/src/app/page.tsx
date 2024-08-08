import HeroSection from "@/components/HeroSection/HeroSection";
import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Beneficios />
      <NossaEquipe />
      <Footer />
    </>
  );
}

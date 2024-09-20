import HeroSection from "@/components/HeroSection/HeroSection";
import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Beneficios />
      <NossaEquipe />
      <Footer />
      <Feedbacks/>
    </>
  );
}

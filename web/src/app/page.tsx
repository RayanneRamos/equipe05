import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import { Footer } from "@/components/Footer/Footer";
import QuemSomos from "@/components/QuemSomos/QuemSomos";

export default function Home() {
  return (
    <>
      <Beneficios />
      <NossaEquipe />
      <Footer />
      <Feedbacks/>
      <QuemSomos/>
    </>
  );
}

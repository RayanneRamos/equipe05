import Image from "next/image"
import groupImage from "@/assets/group.svg"
import network from "@/assets/network.svg"
import accessibility from "@/assets/accessibility.svg"
import hearthandshake from "@/assets/heart-handshake.svg"
import scale from "@/assets/scale.svg"
import Divider from "@/assets/Divider.svg"

function titulo() {
  return (
    <h2 className="text-[#FFFF] md:w-[527px] xl:text-[48px] xl:leading-[57.6px] mb-6">Quais são os pilares da  nossa comunidade?</h2>
  )
}

function Colaboração() {
  
  return (
    <>
      
<ul>

<li className="text-[#E5E5E5] flex flex-row gap-4">
  <div className="flex flex-col items-center">
  <Image 
      src = {network} 
     alt="accessibility Image"
     width={88}
     height={88}
    />
     <Image 
     src = {Divider} 
     alt="accessibility Image"
     width={3}
     height={3}
    />
  </div>
  <div className="flex flex-col">
      <h2 className="font-bold leading-7">Colaboração</h2>  
      <p className="text-[16px]">Acreditamos que a colaboração é a chave para a inovação e o sucesso. Juntos, compartilhamos conhecimentos, habilidades e experiências para alcançar objetivos comuns.</p>
    </div>
  </li>
        
  <li className="text-[#E5E5E5] flex flex-row gap-4">
  <div className="flex flex-col items-center">
    <Image 
      src = {accessibility} 
     alt="accessibility Image"
     width={88}
     height={88}
    />
     <Image 
     src = {Divider} 
     alt="accessibility Image"
     width={3}
     height={3}
    />
    </div>
     <div className="flex flex-col">
      <h2 className="font-bold leading-7">Inclusão</h2>  
      <p className="text-[16px]">Promovemos um ambiente acolhedor e inclusivo onde todas as vozes são ouvidas e respeitadas. Valorizamos a diversidade e acreditamos que ela fortalece nossa comunidade.</p>
    </div>
  </li>

  <li className="text-[#E5E5E5] flex flex-row gap-4">
  <div className="flex flex-col items-center">
    <Image 
      src = {hearthandshake} 
     alt="dot Image"
     width={88}
     height={88}
    />
     <Image 
     src = {Divider} 
     alt="accessibility Image"
     width={3}
     height={3}
    />
    </div>
    <div className="flex flex-col">
      <h2 className="font-bold leading-7">Impacto Social</h2>  
      <p className="text-[16px]">Buscamos fazer uma diferença positiva no mundo através da tecnologia. Nossos projetos e iniciativas são orientados para criar um impacto significativo na sociedade.</p>
    </div>
  </li>

  <li className="text-[#E5E5E5] flex flex-row gap-4">
  <div className="flex flex-col items-center">
    <Image 
      src = {scale} 
     alt="dot Image"
     width={88}
     height={88}
    />
    </div>
        <div className="flex flex-col">
      <h2 className="font-bold leading-7">Ética e Transparência</h2>  
      <p className="text-[16px]">Operamos com integridade, transparência e responsabilidade. Acreditamos que a confiança e a ética são fundamentais para o desenvolvimento sustentável da nossa comunidade.</p>
    </div>
  </li>
</ul>
    </>

  )
}

function elementgroupImage() {
  return(
    <Image
      src={groupImage}
      alt="group Image"
      width={588}
      height={486}
    />
  )
}

export {
  titulo,
  Colaboração,
  elementgroupImage,
}
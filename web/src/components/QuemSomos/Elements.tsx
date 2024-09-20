import Image from "next/image"
import vectorImage from "@/assets/vector.svg"
import dot from "@/assets/dot.svg"

function titulo() {
  return (
    <h2 className="text-[#FFFF] md:w-[527px] xl:text-[48px] xl:leading-[57.6px] mb-6">Quem somos e em que acreditamos?</h2>
  )
}

function descricao() {
  return (
    <p className="text-[#D4D4D8] xl:text-[18px] xl:leading-normal mb-8">O Código Certo é uma iniciativa dedicada a impulsionar a inovação e o desenvolvimento digital, <span className="potencial">fundada em 2018 e atualmente com cerca de 20 funcionários. </span> é <span className="ilimitado">Com uma abordagem centrada nas pessoas e na excelência técnica,</span> estamos dedicados a construir um amanhã melhor,<span className="constante"> hoje.</span></p>
  )
}

function acreditamos() {
  
  return (
    <>
        <p className="font-bold text-[#FFF] xl:text-[20px] mb-4">Acreditamos em:</p>

<ul>
  <li className="text-[#E5E5E5] flex flex-row gap-4"> 
    <Image 
      src = {dot} 
     alt="dot Image"
     width={20}
     height={20}
    />
    Tecnologia para Todos
  </li>
        
  <li className="text-[#E5E5E5] flex flex-row gap-4">
    <Image 
      src = {dot} 
     alt="dot Image"
     width={20}
     height={20}
    />
    Empoderamento Individual
  </li>

  <li className="text-[#E5E5E5] flex flex-row gap-4">
    <Image 
      src = {dot} 
     alt="dot Image"
     width={20}
     height={20}
    />
    Educação Contínua
  </li>

  <li className="text-[#E5E5E5] flex flex-row gap-4">
    <Image 
      src = {dot} 
     alt="dot Image"
     width={20}
     height={20}
    />
    Diversidade e Inclusão
  </li>
</ul>
    </>

  )
}

function elementVectorImage() {
  return(
    <Image
      src={vectorImage}
      alt="Vector Image"
      width={665}
      height={495}
     className="xl:w-[665px] xl:h-[495px]"
    />
  )
}

export {
  titulo,
  descricao,
  acreditamos,
  elementVectorImage,
}
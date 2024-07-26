import * as C from "./Containers"
import * as E from "./Elements"

export default function HeroSection() {
  return(
    <C.ContainerHeroSection>
       <C.ContainerText>
          <E.titulo/>
          <E.descricao/>
          <C.ContainerButtons>
            <E.buttonParticipe/>
            <E.buttonSaibaMais/>
          </C.ContainerButtons>
        <E.comunidade/>
       </C.ContainerText>
       <C.ContainerImage>
          <E.mapaMundi/>
       </C.ContainerImage>
    </C.ContainerHeroSection>
  )
}
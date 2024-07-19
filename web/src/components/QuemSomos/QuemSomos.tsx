import * as C from "./Containers"
import * as E from "./Elements"

export default function QuemSomos() {
  return(
    <section className=" flex xl:flex-row xl:py-[112px] xl:px-[128px]">
       <C.ContainerText>
          <E.titulo/>
          <E.descricao/>
          <E.acreditamos/>
       </C.ContainerText>
       <C.ContainerImage>
          <E.elementVectorImage/>
       </C.ContainerImage>
    </section>
  )
}
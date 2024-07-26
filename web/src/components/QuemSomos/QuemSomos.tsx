import * as C from "./Containers"
import * as E from "./Elements"

export default function QuemSomos() {
  return(
    < C.ContainerQuemSomos>
       <C.ContainerText>
          <E.titulo/>
          <E.descricao/>
          <E.acreditamos/>
       </C.ContainerText>
       <C.ContainerImage>
          <E.elementVectorImage/>
       </C.ContainerImage>
    </C.ContainerQuemSomos>
  )
}
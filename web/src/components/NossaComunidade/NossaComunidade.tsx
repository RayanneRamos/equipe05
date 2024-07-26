import * as C from "./Containers"
import * as E from "./Elements"

export default function NossaComunidade() {
  return(
    <C.ContainerNossaComunidade>
      <C.ContainerImage>
          <E.titulo/>
          <E.elementgroupImage/>
       </C.ContainerImage>
       <C.ContainerText>
          <E.Colaboração/>
       </C.ContainerText>
    </C.ContainerNossaComunidade>
  )
}
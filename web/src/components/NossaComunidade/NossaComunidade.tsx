import * as C from "./Containers"
import * as E from "./Elements"

export default function NossaComunidade() {
  return(
    <section className=" flex xl:flex-row xl:py-[112px] xl:px-[128px]">
      <C.ContainerImage>
          <E.titulo/>
          <E.elementgroupImage/>
       </C.ContainerImage>
       <C.ContainerText>
          <E.Colaboração/>
       </C.ContainerText>
    </section>
  )
}
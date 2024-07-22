import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerNossaComunidade({ children }: Props) {
  return(
    <section className=" flex xl:flex-row xl:py-[112px] xl:px-[128px]">
      {children}
    </section>
  )
}

function ContainerText({ children }: Props) {
  return(
     <div  className=" xl:py-0 xl:px-16 mr-16">
       {children}
     </div>
  
  )
}

function ContainerImage({ children }: Props) {
  return(
    <div>
      {children}
    </div>
  )
}

export {
ContainerText,
ContainerImage,
ContainerNossaComunidade,

}

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerQuemSomos({ children }: Props) {
  return(
    <section className=" flex xl:flex-row xl:py-[112px] xl:px-[128px]">
      {children}
    </section>
  )
}

function ContainerText({ children }: Props) {
  return(
     <div className="w-[527px] xl:py-0 xl:px-16 mr-16">
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
ContainerQuemSomos,

}

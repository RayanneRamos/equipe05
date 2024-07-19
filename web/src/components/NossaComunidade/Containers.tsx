import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerText({ children }: Props) {
  return(
     <section className=" xl:py-0 xl:px-16 mr-16">
       {children}
     </section>
  
  )
}

function ContainerImage({ children }: Props) {
  return(
    <section>
      {children}
    </section>
  )
}

export {
ContainerText,
ContainerImage,

}

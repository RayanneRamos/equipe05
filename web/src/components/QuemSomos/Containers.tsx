import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Container({ children }: Props) {
  return(
    <section className="containerText xl:w-[151.2rem] border">
      {children}
    </section>
  )
}
function ContainerQuemSomos({ children }: Props) {
  return(
    <section className="containerText xl:w-full xl:h-[75.5rem] border">
      {children}
    </section>
  )
}
function ContainerLayout({ children }: Props) {
  return(
    <section className="containerText xl:w-full xl:h-[89.008rem] border">
      {children}
    </section>
  )
}

export {
  Container,
  ContainerQuemSomos,
  ContainerLayout,
}
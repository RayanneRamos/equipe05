import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerHeroSection({ children }: Props) {
  return(
    <section className="heroSection xl:flex-row xl:py-[24px] xl:px-[72px]">
      {children}
    </section>
  )
}
function ContainerText({ children }: Props) {
  return(
    <div className="containerText xl:py-0 xl:px-16">
      {children}
    </div>
  )
}
function ContainerButtons({ children }: Props) {
  return(
    <div className="containerButtons gap-[10px]">
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
  ContainerHeroSection,
  ContainerText,
  ContainerButtons,
  ContainerImage
}